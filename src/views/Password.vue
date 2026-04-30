<template>
    <div class="view-container container">
        <div class="question-container container">
            <div id="QuestionBox" class="question">
                You love to what????
            </div>
        </div>
        <div class="password-container container">
                <input 
                    class="input"
                    v-model="currentGuess"
                    @keyup.enter="submit"
                    placeholder="Enter password"
                />
                <button @click="submit" class="submit">Go!</button>
        </div>
        <div class="hint-button-container" v-if="(anyWrongGuess && !hideHintPermanently)">
            <button @click="getHint">Hint</button>
        </div>
        <div class="hint-container" v-if="hideHintPermanently">
            <div class="joke" v-if="showJoke">No hints.</div>
            <div class="gotcha" v-if="showGotcha">Just kidding :D</div>
            <div class="hint" v-if="showHint">Look under your bed</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();

const answer = "munch munch"
const currentGuess = ref<string>('');
const anyWrongGuess = ref<boolean>(false);
const hideHintPermanently = ref<boolean>(false);

const showJoke = ref<boolean>(false);
const showGotcha = ref<boolean>(false);
const showHint = ref<boolean>(false);

const submit = () => {
    if (currentGuess.value == null || currentGuess.value == 'undefined' || currentGuess.value == "")
        return;
        
    if(currentGuess.value.toLowerCase() == answer){
        router.push('/playlist');
    }
    else {
        anyWrongGuess.value = true;
        currentGuess.value = "";
    }
}

const getHint = () => {
    hideHintPermanently.value = !hideHintPermanently.value;

    showJoke.value = true;
    setTimeout(() => {
        showJoke.value = false;

        showGotcha.value = true;
        setTimeout(() => {
            showGotcha.value = false;

            showHint.value = true;
        }, 1500)

    }, 1500)
}
</script>

<style scoped>
body {
    align-items: center;
    justify-content: center;
}

.view-container {
    height: 75vh;
}

.password-container {
    justify-content: space-around;
}

.question-container, .password-container {
    margin-bottom: 2em;
}

.question {
    /* font-size: 5.5vh; */
    font-size: clamp(1rem, 5.5vh, 3rem);
    font-weight: 700;
}

.hint-container {
    background-color: #d2b9fa;
    border-radius: 5px;
    padding: 1%;
}

.submit {
    margin-top: 1.5em;
}

.hint, .gotcha, .joke {
    /* font-size: 5.5vh; */
    font-size: clamp(.85rem, 4.7vh, 2.5rem);
    font-weight: 700;
}

.joke {
    color: #7a3030;
}

.gotcha {
    color: #064a0c
}

.input {
  width: 75%;
  padding: 14px 12px 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  outline: none;
  background: #fff;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

/* Focus state */
.input:focus {
  border-color: #6366f1;
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.15);
}

/* Floating label */
.label {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  background: #fff;
  padding: 0 4px;
  color: #888;
  font-size: 14px;
  pointer-events: none;
  transition: all 0.2s ease;
}

/* Float label when focused or filled */
.input:focus + .label,
.input:not(:placeholder-shown) + .label {
  top: 0;
  font-size: 12px;
  color: #6366f1;
}

/* Optional animated underline */
.underline {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  width: 0%;
  background: #6366f1;
  transition: width 0.25s ease;
}

.input:focus ~ .underline {
  width: 100%;
}
</style>