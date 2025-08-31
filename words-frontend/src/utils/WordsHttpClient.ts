export default class WordsHttpClient {
    declare private _endpoint: string;
    private _translateRoute = "/translate";

    public static shared = new WordsHttpClient(`${import.meta.env.VITE_API_URL}/api`);

    constructor(endpoint: string) {
        this._endpoint = endpoint;
    }


    public async getTranslation(language: 'ENGLISH' | 'LATIN', queryString: string) {
        try {
            const endpoint = `${this._endpoint}${this._translateRoute}`;
            const languageRoute = `${endpoint}/${language.toLowerCase()}`
            const response =  await fetch(`${languageRoute}/${queryString}`);

            return await response.json();
        } catch (ex) {
            // log goes here
            throw ex;
        }
    }
}