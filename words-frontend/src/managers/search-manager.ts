import WordsHttpClient from "../utils/WordsHttpClient";
import { InputFieldWithButton } from "../components/input-field-with-button";

let searchType: "LATIN" | "ENGLISH";

searchType = "LATIN";

const searchResult = document.querySelector(InputFieldWithButton.htmlName) as InputFieldWithButton;
searchResult?.addEventListener(InputFieldWithButton.submittedEventName, handleInputEvent);

async function handleInputEvent(event: unknown) {
    const result = (await WordsHttpClient.shared
        .getTranslation(searchType, (event as CustomEvent).detail.value));
    console.log(result);
}

