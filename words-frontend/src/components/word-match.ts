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
        const partOfSpeechHtml = `&emsp;${PartsOfSpeech.getLongForm(this.pos)}`;

        const caseHtml = this.case ?
        `${Case.getLongForm(this.case)}`
        : '';

        const genderHtml = this.gender ? `&emsp;
            <span class="tooltip" data-tooltip="${Gender.getLongForm(this.gender)}">${this.gender}.</span> &emsp;
        ` : '';

        const numberHtml = this.number ?
        `&emsp;${WordNumber.getLongForm(this.number)}`
        : '';

        const personHtml = this.person ?
        `&emsp;${formatNumberAsOrdinal(parseInt(this.person))} Person`
        : '';

        const versionHtml = this.version ? `&emsp;
            ${formatNumberAsOrdinal(parseInt(this.version))} ${this.pos === 'N'
                || this.pos === 'PRON'
                || this.pos === 'ADJ' ?
                'Declension' : 'Conjugation'}
        ` : '';

        const tenseHtml = this.tense ?
        `<em><small>Tense:</small></em> ${Tense.getLongForm(this.tense)}`
        : '';

        const voiceHtml = this.voice ?
        `<em><small>Voice:</asmall></em> ${Voice.getLongForm(this.voice)}`
        : '';

        const moodHtml = this.mood ?
        `<em><small>Mood:</small></em> ${Mood.getLongForm(this.mood)}`
        : '';

        const verbExtrasHtml = `${tenseHtml} ${voiceHtml} ${moodHtml}`;


        this.innerHTML = `
        <h3>${matchHtml} ${genderHtml}</h3>
        <p>${versionHtml} ${caseHtml} ${numberHtml} ${personHtml} ${partOfSpeechHtml}</p>
        <p>${verbExtrasHtml}</p>
        <hr>
        `;
    }

}


if (!window.customElements.get(WordMatch.htmlName)) {
  window.customElements.define(WordMatch.htmlName, WordMatch);
}