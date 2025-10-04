import { Case, type CaseValue } from "../lib/models/Case";
import { WordNumber, type NumberValue } from "../lib/models/Number";
import { type PartsOfSpeechValue } from "../lib/models/PartOfSpeech";
import { Mood, type MoodValue } from "../lib/models/verb/Mood";
import { Tense, type TenseValue } from "../lib/models/verb/Tense";
import { Voice, type VoiceValue } from "../lib/models/verb/Voice";
import { formatNumberAsOrdinal } from "../utils/FormattingUtil";

export class WordMatch extends HTMLElement {
    public static htmlName = 'word-match';

    public static observedAttributes = ['match'];


    private declare wordMatch: string;
    private declare pos: PartsOfSpeechValue;

    private version?: string; // declension/conjugation
    private case?: CaseValue;
    private number?: NumberValue;
    private person?: string;
    private tense?: TenseValue;
    private voice?: VoiceValue;
    private mood?: MoodValue;




    constructor() {
        super();
    }



    attributeChangedCallback(name: string, _: unknown, newValue: string) {
        if (name === 'match') {
            const matchLine = JSON.parse(newValue);

            this.wordMatch = matchLine.wordMatch;
            this.pos = matchLine.partOfSpeech;

            this.version = matchLine.declension ?? matchLine.conjugation ?? matchLine.version;
            this.case = matchLine.case;
            this.number = matchLine.number;
            this.person = matchLine.person;
            this.tense = matchLine.tense;
            this.voice = matchLine.voice;
            this.mood = matchLine.mood;
        }

        (this as Record<string, unknown>)[name] = newValue;
    }

    connectedCallback() {

        const caseHtml = this.case ?
        `${Case.getLongForm(this.case)}`
        : '';


        const numberHtml = this.number ?
        `${WordNumber.getLongForm(this.number)}`
        : '';

        const personHtml = this.person ?
        `${formatNumberAsOrdinal(parseInt(this.person))} Person`
        : '';

        const versionHtml = this.version ? `
            ${formatNumberAsOrdinal(parseInt(this.version))} ${this.pos === 'N'
                || this.pos === 'PRON'
                || this.pos === 'ADJ' ?
                'Declension' : 'Conjugation'}
        ` : '';

        const tenseHtml = this.tense ?
        `Tense: <em>${Tense.getLongForm(this.tense)}</em>`
        : '';

        const voiceHtml = this.voice ?
        `Voice: <em>${Voice.getLongForm(this.voice)}</em>`
        : '';

        const moodHtml = this.mood ?
        `Mood: <em>${Mood.getLongForm(this.mood)}</em>`
        : '';

        const verbExtrasHtml = `${tenseHtml} ${voiceHtml} ${moodHtml}`;
        const verbSeparator = (verbExtrasHtml.trim()) ? '<strong>-</strong>' : '';

        this.innerHTML = `
        <small><p>${versionHtml} ${caseHtml} ${numberHtml} ${personHtml} ${verbSeparator} ${verbExtrasHtml}</p></small>
        `;
    }

}


if (!window.customElements.get(WordMatch.htmlName)) {
  window.customElements.define(WordMatch.htmlName, WordMatch);
}