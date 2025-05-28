import Button from "@/components/ui/button";
import { Plus } from "@/components/ui/icons";

export type Test = {
  title: string;
  questions: string[];
};

type Props = {
  onSelect: (test: Test) => void;
};

export default function Tests({ onSelect }: Props) {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {tests.map((test) => (
        <Button
          key={test.title}
          onClick={() => onSelect(test)}
          className="flex justify-between items-center uppercase"
        >
          {test.title} Test
          <Plus className="w-3 h-3" />
        </Button>
      ))}
    </ul>
  );
}

const tests: Test[] = [
  {
    title: "depression",
    questions: [
      "Do you feel sad or depressed most of the time?",
      "Have you lost interest in activities you used to enjoy?",
      "Do you experience changes in appetite (increase or decrease)?",
      "Do you have trouble sleeping or sleep more than usual?",
      "Do you feel tired or lack energy daily?",
      "Do you feel guilty or worthless?",
      "Do you find it hard to concentrate or make decisions?",
      "Do you have thoughts about death or suicide?",
      "Do you feel isolated from others?",
      "Do you feel hopeless or lack hope for the future?",
    ],
  },
  {
    title: "anxiety",
    questions: [
      "Do you feel anxious or worried most of the time?",
      "Do you find it hard to control your worries?",
      "Do you feel easily annoyed or irritable?",
      "Do you experience racing heart or shortness of breath?",
      "Do you have trouble sleeping due to overthinking?",
      "Do you experience physical pain (like headaches) due to anxiety?",
      "Do you feel afraid of social situations?",
      "Do you have sudden panic attacks?",
      "Do you avoid places or people because of anxiety?",
      "Do you feel that something bad is always going to happen?",
    ],
  },
  {
    title: "adhd",
    questions: [
      "Do you find it hard to stay focused on tasks?",
      "Do you often lose things needed for daily activities?",
      "Do you feel restless or fidgety most of the time?",
      "Do you interrupt others during conversations?",
      "Do you struggle to follow through on instructions?",
      "Do you have trouble organizing tasks or activities?",
      "Do you avoid tasks that require sustained mental effort?",
      "Are you easily distracted by external stimuli?",
      "Do you forget daily responsibilities or appointments?",
      "Do you feel impatient or have trouble waiting your turn?",
    ],
  },
  {
    title: "ptsd",
    questions: [
      "Do you have recurring memories of a traumatic event?",
      "Do you experience nightmares about a past trauma?",
      "Do you avoid reminders of a traumatic event?",
      "Do you feel on edge or easily startled?",
      "Do you have trouble sleeping due to past events?",
      "Do you feel detached from others since the trauma?",
      "Do you experience flashbacks of the event?",
      "Do you feel guilty or blame yourself for the trauma?",
      "Do you have negative thoughts about the world?",
      "Do you lose interest in activities since the trauma?",
    ],
  },
  {
    title: "addiction",
    questions: [
      "Do you feel unable to stop using a substance or behavior?",
      "Do you need more of it to feel the same effect?",
      "Do you experience withdrawal symptoms when stopping?",
      "Do you spend a lot of time obtaining or using it?",
      "Do you neglect responsibilities due to this habit?",
      "Do you continue despite negative consequences?",
      "Do you hide your usage from others?",
      "Do you feel anxious when you can't use it?",
      "Do you lose interest in other activities?",
      "Do you prioritize it over relationships?",
    ],
  },
  {
    title: "bipolar",
    questions: [
      "Do you experience extreme mood swings (highs and lows)?",
      "Have you had periods of unusually high energy?",
      "Do you feel depressed for days or weeks at a time?",
      "Do you engage in risky behaviors during high-energy periods?",
      "Do you have trouble sleeping during energetic phases?",
      "Do you feel worthless during low periods?",
      "Do you talk faster than usual during high moods?",
      "Do you lose interest in activities during low moods?",
      "Do you have racing thoughts during high-energy times?",
      "Do you feel hopeless during depressive episodes?",
    ],
  },
  {
    title: "eating disorder",
    questions: [
      "Do you worry excessively about your weight or shape?",
      "Do you skip meals or restrict food intake?",
      "Do you feel guilty after eating?",
      "Do you binge eat and feel out of control?",
      "Do you exercise excessively to control weight?",
      "Do you use laxatives or vomiting to control weight?",
      "Do you feel your self-worth depends on your weight?",
      "Do you avoid eating in front of others?",
      "Do you have irregular eating patterns?",
      "Do you obsess over calories or food content?",
    ],
  },
  {
    title: "parent",
    questions: [
      "Does your child seem unusually sad or withdrawn?",
      "Does your child have trouble sleeping or eating?",
      "Does your child show extreme mood swings?",
      "Does your child avoid social interactions?",
      "Does your child seem overly anxious or worried?",
      "Does your child struggle with focus or schoolwork?",
      "Does your child express feelings of hopelessness?",
      "Does your child have sudden angry outbursts?",
      "Does your child lose interest in favorite activities?",
      "Does your child talk about harming themselves?",
    ],
  },
  {
    title: "youth mental health",
    questions: [
      "Do you feel sad or down most of the time?",
      "Do you find it hard to enjoy things you used to like?",
      "Do you feel nervous or scared a lot?",
      "Do you have trouble sleeping or eating normally?",
      "Do you feel alone even when with friends?",
      "Do you get angry or upset easily?",
      "Do you find school or work really hard to handle?",
      "Do you think about hurting yourself?",
      "Do you feel like no one understands you?",
      "Do you feel tired or low-energy all the time?",
    ],
  },
  {
    title: "postpartum depression",
    questions: [
      "Do you feel overwhelmed as a new or expecting parent?",
      "Have you lost interest in caring for yourself or your baby?",
      "Do you experience sudden mood swings after childbirth?",
      "Do you have trouble sleeping even when your baby is asleep?",
      "Do you feel detached from your baby?",
      "Do you feel guilty about your parenting abilities?",
      "Do you find it hard to bond with your baby?",
      "Do you have thoughts of harming yourself or your baby?",
      "Do you feel isolated from family or friends?",
      "Do you feel hopeless about your future as a parent?",
    ],
  },

  {
    title: "psychosis schizophrenia",
    questions: [
      "Do you hear voices that others don't hear?",
      "Do you see things that others cannot see?",
      "Do you believe things that others find unbelievable?",
      "Do you feel disconnected from reality?",
      "Do you have trouble distinguishing what's real?",
      "Do you feel suspicious or paranoid about others?",
      "Do you experience confused or disorganized thoughts?",
      "Do you withdraw from social interactions?",
      "Do you have unusual emotional responses?",
      "Do you feel emotions that don't match the situation?",
    ],
  },
  {
    title: "self-inquiry survey",
    questions: [
      "Do you feel satisfied with your life in general?",
      "Do you find it hard to cope with daily stress?",
      "Do you feel lonely or isolated?",
      "Do you experience frequent mood changes?",
      "Do you feel that you understand your emotions well?",
      "Do you have clear goals that you are working towards?",
      "Do you worry about your personal relationships?",
      "Do you experience physical symptoms due to stress?",
      "Do you find it hard to ask for help when needed?",
      "Do you feel emotionally balanced?",
    ],
  },
];
