import { Case, type CaseValue } from "../lib/models/Case";
import { Gender, type GenderValue } from "../lib/models/Gender";
import { WordNumber, type NumberValue } from "../lib/models/Number";
import { PartsOfSpeech, type PartsOfSpeechValue } from "../lib/models/PartOfSpeech";
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
    private gender?: GenderValue;
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

            this.version = matchLine.declension;
            this.case = matchLine.case;
            this.number = matchLine.number;
            this.gender = matchLine.gender;
            this.person = matchLine.person;
            this.tense = matchLine.tense;
            this.voice = matchLine.voice;
            this.mood = matchLine.mood;
        }

        (this as Record<string, unknown>)[name] = newValue;
    }

    connectedCallback() {
        const matchHtml = `${this.wordMatch}`;
        const partOfSpeechHtml = `${PartsOfSpeech.getLongForm(this.pos)}`;

        const caseHtml = this.case ?
        `${Case.getLongForm(this.case)}`
        : '';

        const genderHtml = this.gender ? `
            <span class="tooltip" data-tooltip="${Gender.getLongForm(this.gender)}">${this.gender}.</span>
        ` : '';

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


        this.innerHTML = `
        <h3>${matchHtml} <small>${genderHtml}</small></h3>
        <small><p>${versionHtml} ${caseHtml} ${numberHtml} ${personHtml} ${partOfSpeechHtml}</p></small>
        <small><p>${verbExtrasHtml}</p></small>
        `;
    }

}


if (!window.customElements.get(WordMatch.htmlName)) {
  window.customElements.define(WordMatch.htmlName, WordMatch);
}