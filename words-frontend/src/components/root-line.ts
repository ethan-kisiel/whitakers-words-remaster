import { Age, type AgeValue } from "../lib/models/codes/Age";
import { Domain, type DomainValue } from "../lib/models/codes/Domain";
import { Frequency, type FrequencyValue } from "../lib/models/codes/Frequency";
import { Region, type RegionValue } from "../lib/models/codes/Region";
import { Source, type SourceValue } from "../lib/models/codes/Source";
import { Gender, type GenderValue } from "../lib/models/Gender";

export class RootLine extends HTMLElement {
    public static htmlName = 'root-line';
    public static observedAttributes = ['age', 'domain', 'frequency', 'region', 'source', 'roots', 'meanings', 'pos', 'gender', 'version'];

    private declare age: AgeValue;
    private declare domain: DomainValue;
    private declare frequency: FrequencyValue;
    private declare region: RegionValue;
    private declare source: SourceValue;

    private roots?: string;
    private meanings?: string;
    private pos?: string;
    private gender?: GenderValue;
    private version?: string;

    constructor() {
        super();
    }

    attributeChangedCallback(name: string, _: unknown, newValue: string) {
        console.log(`${name}: ${newValue}`);
        (this as Record<string, unknown>)[name] = newValue;
    }

    connectedCallback() {

        const dictDataHtml = `Age: ${Age.getLongForm(this.age, true)}

Source: ${Source.getLongForm(this.source, true)}

Frequency: ${Frequency.getLongForm(this.frequency, true)}

Domain: ${Domain.getLongForm(this.domain, true)}

Geographic Origin: ${Region.getLongForm(this.region)}`;

        const rootsHtml = this.roots !== undefined ? `
        <h3>
            <em>${this.roots}</em>
        </h3>
        ` : '';

        const meaningsHtml = this.meanings !== undefined ? `
        <p>
            <strong>Meanings:</strong> ${this.meanings}.
        </p>
        ` : '';

        const posHtml = this.pos !== undefined ? `
        <h3>
        ${this.pos}
        </h3>
        ` : '';

        const genderHtml = this.gender !== undefined ? `
        <h3>
            <span class="tooltip" data-tooltip="${Gender.getLongForm(this.gender)}">${this.gender}.</span>
        </h3>
        ` : '';

        const version = this.version !== undefined ? `
        <h3>
            ${this.version}
        </h3>
        ` : '';

        this.innerHTML = `
        <div class='one-line'>
        ${rootsHtml} ${genderHtml} ${posHtml}
        <span class="tooltip" data-tooltip="${dictDataHtml}">ⓘ</span>
        </div>
        ${meaningsHtml}
        `;
    }
}

if (!window.customElements.get(RootLine.htmlName)) {
  window.customElements.define(RootLine.htmlName, RootLine);
}
