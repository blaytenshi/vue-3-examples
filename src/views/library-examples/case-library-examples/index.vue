<script setup>
import Container from "@/components/Container.vue";
import { CONTAINER_DIRECTIONS } from "@/constants/options.js";
import Case from "case";

const sampleText = "thisIsAPieceOfSampleTextThatWeWillConvertToSentenceCase";
const sentenceCaseSampleText = Case.sentence(sampleText);
</script>

<template>
  <Container :direction="CONTAINER_DIRECTIONS.COLUMN">
    <h1>Case Library</h1>
    <p>
      Lodash has case conversion built in. But it can be pretty heavy because lodash does alot of other things.
    </p>
    <p>
      It also doesn't support sentence case.
    </p>
    <p>
      There's two libraries besides lodash that specialises in case conversions that can be used in the frontend or the backend:
    </p>
    <p>
      Case:<br>
      https://www.npmjs.com/package/case
    </p>
    <p>
      or
    </p>
    <p>
      Change Case All<br>
      https://www.npmjs.com/package/change-case-all
    </p>
    <p>
      Case seems seems to have a little more functionality though so let's integrate that
    </p>
    <h2>
      Sentence Case
    </h2>
    <p>{{ sampleText }}</p>
    <p>{{ sentenceCaseSampleText }}</p>
  </Container>
</template>

<style scoped>

</style>
