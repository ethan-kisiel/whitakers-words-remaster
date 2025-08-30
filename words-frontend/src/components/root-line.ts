import { Age, type AgeValue } from "../lib/models/codes/Age";
import { Domain, type DomainValue } from "../lib/models/codes/Domain";
import { Frequency, type FrequencyValue } from "../lib/models/codes/Frequency";
import { Region, type RegionValue } from "../lib/models/codes/Region";
import { Source, type SourceValue } from "../lib/models/codes/Source";
import { Gender, type GenderValue } from "../lib/models/Gender";
import { PartsOfSpeech, type PartsOfSpeechValue } from "../lib/models/PartOfSpeech";
import type { PronounKindValue } from "../lib/models/PronounKind";

export class RootLine extends HTMLElement {
    public static htmlName = 'root-line';
    public static observedAttributes = ['line', 'age', 'domain', 'frequency', 'region', 'source', 'roots', 'meanings', 'pos', 'gender', 'kind', 'version'];

    private declare age: AgeValue;
    private declare domain: DomainValue;
    private declare frequency: FrequencyValue;
    private declare region: RegionValue;
    private declare source: SourceValue;

    private roots?: string;
    private pos?: PartsOfSpeechValue;
    private gender?: GenderValue;
    private kind?: PronounKindValue;
    private version?: string;

    constructor() {
        super();
    }

    attributeChangedCallback(name: string, _: unknown, newValue: string) {
        if (name === 'line') {
            const parsedRootLine = JSON.parse(newValue);

            this.age = parsedRootLine.codes.age;
            this.domain = parsedRootLine.codes.area;
            this.frequency = parsedRootLine.codes.frequency;
            this.region = parsedRootLine.codes.geo;
            this.source = parsedRootLine.codes.source;

            this.roots = parsedRootLine.root;
            this.pos = parsedRootLine.partOfSpeech;
            this.gender = parsedRootLine.gender;
            this.kind = parsedRootLine.kind;
            this.version = parsedRootLine.version;
        }

        (this as Record<string, unknown>)[name] = newValue;
    }

    connectedCallback() {

        const dictDataHtml = `Age: ${Age.getLongForm(this.age, true)}

Source: ${Source.getLongForm(this.source, true)}

Frequency: ${Frequency.getLongForm(this.frequency, true)}

Domain: ${Domain.getLongForm(this.domain, true)}

Geographic Origin: ${Region.getLongForm(this.region)}`;

        const rootsHtml = this.roots ? `
            &emsp; <em>${this.roots}</em> &emsp;
        ` : '';

        const posHtml = this.pos ? `
        ${PartsOfSpeech.getLongForm(this.pos)} &emsp;
        ` : '';

        const genderHtml = this.gender ? `
            <span class="tooltip" data-tooltip="${Gender.getLongForm(this.gender)}">${this.gender}.</span> &emsp;
        ` : '';

        const version = this.version ? `
        ${this.version} ${this.pos === 'N' || this.pos === 'PRON' || this.pos === 'ADJ' ? 'Declension' : 'Conjugation'} &emsp;
        ` : '';

        this.innerHTML = `
        <div class='one-line'>
        <span class="tooltip" data-tooltip="${dictDataHtml}">ⓘ</span>
        <h3>${rootsHtml} ${genderHtml} ${version} ${posHtml}</h3>
        </div>
        `;
    }
}

if (!window.customElements.get(RootLine.htmlName)) {
  window.customElements.define(RootLine.htmlName, RootLine);
}
