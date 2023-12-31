// array for questions and feelings
const FeelingQuestionData = {
  question: "How are you feeling right now?",
  answers: [
    {
      label: "Happy",
      questionTwo: {
        question:
          "You feel happy. It's wonderful to hear that. Can you be more specific?",
        answers: [
          {
            label: "Playful",
            questionThree: {
              question: "This is question 3.",
              answers: [{ label: "Aroused" }, { label: "Cheeky" }],
            },
          },
          {
            label: "Content",
            questionThree: {
              question: "This is question 3.",
              answers: [{ label: "Free" }, { label: "Joyful" }],
            },
          },
          {
            label: "Interested",
            questionThree: {
              question: "This is question 3.",
              answers: [{ label: "Curious" }, { label: "Inquisitive" }],
            },
          },
          {
            label: "Proud",
            questionThree: {
              question: "This is question 3.",
              answers: [{ label: "Successful" }, { label: "Confident" }],
            },
          },
          {
            label: "Accepted",
            questionThree: {
              question: "This is question 3.",
              answers: [{ label: "Respected" }, { label: "Valued" }],
            },
          },
          {
            label: "Powerful",
            questionThree: {
              question: "This is question 3.",
              answers: [{ label: "Courageous" }, { label: "Creative" }],
            },
          },
          {
            label: "Peaceful",
            questionThree: {
              question: "This is question 3.",
              answers: [{ label: "Loving" }, { label: "Thankful" }],
            },
          },
          {
            label: "Trusting",
            questionThree: {
              question: "This is question 3.",
              answers: [{ label: "Sensitive" }, { label: "Intimate" }],
            },
          },
          {
            label: "Optimistic",
            questionThree: {
              question: "This is question 3.",
              answers: [{ label: "Hopeful" }, { label: "Inspired" }],
            },
          },
        ],
      },
    },
    {
      label: "Sad",
      questionTwo: {
        question:
          "You feel sad. Remember that it is not permanent. Let's find a more specific description.",
        answers: [
          {
            label: "Lonely",
            questionThree: {
              question: "This is question 3.",
              answers: [{ label: "Isolated" }, { label: "Abandoned" }],
            },
          },
          {
            label: "Vulnerable",
            questionThree: {
              question: "This is question 3.",
              answers: [{ label: "Victimized" }, { label: "Fragile" }],
            },
          },
          {
            label: "Despair",
            questionThree: {
              question: "This is question 3.",
              answers: [{ label: "Grief" }, { label: "Powerless" }],
            },
          },
          {
            label: "Guilty",
            questionThree: {
              question: "This is question 3.",
              answers: [{ label: "Ashamed" }, { label: "remorseful" }],
            },
          },
          {
            label: "Depressed",
            questionThree: {
              question: "This is question 3.",
              answers: [{ label: "Empty" }, { label: "Inferior" }],
            },
          },
          {
            label: "Hurt",
            questionThree: {
              question: "This is question 3.",
              answers: [{ label: "Disappointed" }, { label: "Embarrassed" }],
            },
          },
        ],
      },
    },
    {
      label: "Angry",
      questionTwo: {
        question:
          "You feel angry. Take a deep breath. Let's find a more specific description.",
        answers: [
          {
            label: "Let down",
            questionThree: {
              question: "This is question 3.",
              answers: [{ label: "Betrayed" }, { label: "Resentful" }],
            },
          },
          {
            label: "Humiliated",
            questionThree: {
              question: "This is question 3.",
              answers: [{ label: "Disrespectful" }, { label: "Ridiculed" }],
            },
          },
          {
            label: "Bitter",
            questionThree: {
              question: "This is question 3.",
              answers: [{ label: "Indignant" }, { label: "Violated" }],
            },
          },
          {
            label: "Mad",
            questionThree: {
              question: "This is question 3.",
              answers: [{ label: "Furious" }, { label: "Jealous" }],
            },
          },
          {
            label: "Aggressive",
            questionThree: {
              question: "This is question 3.",
              answers: [{ label: "Provoked" }, { label: "Hostile" }],
            },
          },
          {
            label: "Frustrated",
            questionThree: {
              question: "This is question 3.",
              answers: [{ label: "Infuriated" }, { label: "Annoyed" }],
            },
          },
          {
            label: "Distant",
            questionThree: {
              question: "This is question 3.",
              answers: [{ label: "Withdrawn" }, { label: "Numb" }],
            },
          },
          {
            label: "Critical",
            questionThree: {
              question: "This is question 3.",
              answers: [{ label: "Skeptical" }, { label: "Dismissive" }],
            },
          },
        ],
      },
    },
  ],
};

export default FeelingQuestionData;
