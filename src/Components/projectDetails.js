import logo from ".././assets/logo.png";

// Porject Images
import website from ".././assets/projects/website.png";
import breakout_game from ".././assets/projects/breakout_game.png";
import name_searching from ".././assets/projects/name_searching.png";
import boogle from ".././assets/projects/boogle.png"
import rotten_tomato from ".././assets/projects/rotten_tomato.png"
import neural_network from ".././assets/projects/neural_network.png"

// finScope3D Project Image
import finscope3d from ".././assets/projects/finscope3d/finscope3d.png"
import finscope3d_structure from ".././assets/projects/finscope3d/structure.png"
import finscope3d_chat from ".././assets/projects/finscope3d/chat.png"
import finscope3d_youtube from ".././assets/projects/finscope3d/youtube.png"

// SkillMiner Project Image
import skillminer_logo from ".././assets/projects/skillminer/skillminer.png"
import skillminer_chatbot from ".././assets/projects/skillminer/chatbot.png"
import skillminer_coding from ".././assets/projects/skillminer/coding.png"
import skillminer_dashboard from ".././assets/projects/skillminer/dashboard.png"
import skillminer_interview from ".././assets/projects/skillminer/interview.png"
import skillminer_profile from ".././assets/projects/skillminer/profile.png"
import skillminer_report from ".././assets/projects/skillminer/report.png"
import skillminer_resume from ".././assets/projects/skillminer/resume.png"
import skillminer_signin from ".././assets/projects/skillminer/signin.png"
import skillminer_architecture from ".././assets/projects/skillminer/skillminer-architecture.png"
import skillminer_studyplan from ".././assets/projects/skillminer/studyplan.png"
import skillminer_upload from ".././assets/projects/skillminer/upload.png"

// CodenamesRL Project Images
import codenames from ".././assets/projects/codenamerl/codenames.png"
import codename_settings from ".././assets/projects/codenamerl/codename_settings.png"
import codenames_eval_table from ".././assets/projects/codenamerl/codenames_eval_table.png"
import codenames_rollout from ".././assets/projects/codenamerl/codenames_rollout.png"
import codenames_summary_table from ".././assets/projects/codenamerl/codenames_summary_table.png"

// Lexi Project Images
import lexi from ".././assets/projects/lexi/lexi.png"
import lexi_focus_zone from ".././assets/projects/lexi/focus_zone.png"
import lexi_math_play from ".././assets/projects/lexi/math_play.png"
import lexi_resources from ".././assets/projects/lexi/resources.png"
import lexi_viz_lab from ".././assets/projects/lexi/viz_lab.png"

// Opioid Policy Project Images
import opioid from ".././assets/projects/opioid/opioid.png"
import opioid_summary1 from ".././assets/projects/opioid/summary1.png"
import opioid_summary2 from ".././assets/projects/opioid/summary2.png"
import opioid_summary3 from ".././assets/projects/opioid/summary3.png"

// Music Mental Health Project Images
import music_logo from ".././assets/projects/music/logo.png"
import music_plot1 from ".././assets/projects/music/plot1.png"
import music_plot2 from ".././assets/projects/music/plot2.png"
import music_plot3 from ".././assets/projects/music/plot3.png"
import music_plot4 from ".././assets/projects/music/plot4.png"
import music_plot5 from ".././assets/projects/music/plot5.png"

// Memory-Augmented LSTM Project Images
import lstm_logo from ".././assets/projects/lstm/logo.png"
import lstm_plot1 from ".././assets/projects/lstm/plot1.png"
import lstm_plot2 from ".././assets/projects/lstm/plot2.png"
import lstm_plot3 from ".././assets/projects/lstm/plot3.png"

// EduFER Project Images
import edufer_logo from ".././assets/projects/edufer/logo.png"
import edufer_plot1 from ".././assets/projects/edufer/plot1.png"
import edufer_plot2 from ".././assets/projects/edufer/plot2.png"
import edufer_plot3 from ".././assets/projects/edufer/plot3.png"
import edufer_plot4 from ".././assets/projects/edufer/plot4.png"

// EduCasual Project Images
import educasual_logo from ".././assets/projects/educasual/logo.png"
import educasual_plot1 from ".././assets/projects/educasual/plot1.png"
import educasual_plot2 from ".././assets/projects/educasual/plot2.png"
import educasual_plot3 from ".././assets/projects/educasual/plot3.png"
import educasual_plot4 from ".././assets/projects/educasual/plot4.png"

// Enter your Project Details here
export const projectDetails = [
  {
    title: "SkillMiner - Career Advice with Study Agent ",
    image: skillminer_logo,
    description: [
      <p key="1">
        <strong>SkillMiner is an AI-powered career & study copilot.</strong>
        <br />
        It analyzes your resume, extracts skills, identifies gaps, retrieves learning resources, 
        and generates a personalized study plan powered by an LLM agent, RAG system, 
        and a modern data engineering pipeline. <br />
        <br />        
        There are 7 key features:<br />
        <strong>Sign In:</strong> Google OAuth login via Supabase.
        <br />
        <strong>Upload:</strong> Upload resumes or files for AI processing.
        <br />
        <strong>Chatbot:</strong> AI assistant for questions and personalized guidance.
        <br />
        <strong>Profile:</strong> View and update personal info and skills.
        <br />
        <strong>Resume:</strong> Upload and manage your CV for analysis.
        <br />
        <strong>Dashboard:</strong> Overview of your progress and quick navigation.
        <br />
        <strong>Skill Report:</strong> Extracted strengths, gaps, and learning paths.
        <br />
        <strong>Study Plan: </strong> Personalized daily study plan based on your skills.
        <br />
        <strong>Coding Practice:</strong> Coding exercises with instant AI feedback.
        <br />
        <strong>Interview Practice:</strong> AI-simulated interviews with feedback.
        <br />

        <br />
        This project is now in production — 
        <br />
        frontend (Vercel) + backend (Railway) + database (Supabase + AWS).
        <br />
        Feel free to try it! The link is below:
      </p>,
    ],
    links: [
      "https://skillminer.vercel.app/",
      "https://github.com/JayWu0512/SkillMiner",
      "https://www.youtube.com/watch?v=5HNZr0QxKIk",
      "https://github.com/JayWu0512/SkillMiner/blob/main/docs/Report.pdf"
    ],
    imgs: [skillminer_architecture, skillminer_signin, skillminer_upload, skillminer_report, 
      skillminer_studyplan, skillminer_dashboard, skillminer_chatbot, skillminer_profile, skillminer_resume,
      skillminer_coding, skillminer_interview
    ],
    appendix: [
      <p key="1">
        <strong>Tech</strong> <br /> React, TypeScript, Tailwind CSS, Python, FastAPI, Supabase (Postgres + Auth), OpenAI API, RAG, Docker, Vercel, Railway
      </p>,
    ],
  },
  {
    title: "CodenamesRL – Model-Free RL for Semantic Decision-Making",
    image: codenames,
    description: [
      <p key="1">
        <strong>CodenamesRL is a reinforcement learning research pipeline for the Codenames spymaster task.</strong>
        <br />
        It reformulates clue generation as a semantic decision-making problem, where an agent observes a hidden-role
        Codenames board and outputs a one-word clue plus a clue count. Instead of generating open-ended language,
        the agent acts in a continuous embedding space and decodes its action into a legal clue candidate.
        <br />
        <br />
        The project combines semantic embeddings, imitation learning, off-policy reinforcement learning, and
        goal-conditioned replay to study whether a learning-based spymaster can produce safer and more effective clues.
        <br />
        <br />
        There are 6 key components:
        <br />
        <strong>Goal-Conditioned Environment:</strong> A custom Codenames environment that tracks board roles,
        remaining words, target goals, and clue outcomes.
        <br />
        <strong>Semantic Representation:</strong> Board words and clue candidates are embedded using
        Sentence-Transformers to model semantic similarity.
        <br />
        <strong>Greedy Baseline:</strong> A cosine-margin heuristic that selects clues close to friendly targets
        and far from dangerous words.
        <br />
        <strong>Behavioral Cloning:</strong> A supervised warm-start stage that imitates greedy demonstrations
        before reinforcement learning.
        <br />
        <strong>SAC + HER Training:</strong> A Soft Actor-Critic pipeline with Hindsight Experience Replay for
        continuous clue-embedding actions and goal-conditioned learning.
        <br />
        <strong>Reward Shaping & Evaluation:</strong> Intermediate rewards penalize risky guesses and encourage
        semantic separation, with evaluation across Greedy, BC-only, BC + SAC + HER, and BC + SAC + HER + Reward Shaping.
        <br />
        <br />
        The final experiments show that the full RL pipeline is operational and improves stability compared with
        BC-only in traced rollouts, but the greedy semantic baseline still remains the strongest method in the
        current small-scale 5x5 benchmark.
      </p>,
    ],
    links: [
      "https://github.com/JayWu0512/CodenamesRL",
      "https://github.com/JayWu0512/CodenamesRL/blob/main/reports/Codenames%20Final%20Report.pdf"
    ],
    imgs: [
      codenames_summary_table,
      codename_settings,
      codenames_rollout,
      codenames_eval_table,
    ],
    appendix: [
      <p key="1">
        <strong>Tech</strong> <br />
        Python, Gymnasium, Stable-Baselines3, PyTorch, Sentence-Transformers, Soft Actor-Critic, 
        Hindsight Experience Replay, Behavioral Cloning, Reward Shaping, Jupyter Notebook, Matplotlib
      </p>,
    ],
  },
  {
    title: "Lexi - The Neurodiverse Learning Coach",
    image: lexi,
    description: [
      <p key="1">
        <strong>Lexi is an accessibility-first AI learning platform built for neurodiverse students.</strong>
        <br />
        It is designed to reduce barriers for learners with Dyslexia, ADHD, Dyscalculia, and related learning differences by transforming dense educational content into formats that are easier to process visually, verbally, and step by step.
        <br />
        <br />
        Instead of only summarizing content, Lexi restructures learning materials with multimodal AI so students can interact with information in a way that better matches their cognitive needs.
        <br />
        <br />
        There are 4 key components:
        <br />
        <strong>Homework Transformer:</strong> Uses Gemini vision capabilities to scan worksheets or uploaded photos, remove clutter, and regenerate content into simplified language with clearer instructional steps.
        <br />
        <strong>Visual Math Playground:</strong> Lets students draw directly on a canvas, then uses multimodal reasoning to interpret symbols and return structured visual feedback in real time.
        <br />
        <strong>Visual Learning Lab:</strong> Converts dense paragraphs into mind maps, concept trees, and step-based visual flows so learners can see relationships instead of decoding long text blocks.
        <br />
        <strong>Accessibility-First Interaction:</strong> Includes OpenDyslexic font support, high-contrast mode, focus mode, and voice-based interaction to reduce reading, typing, and cognitive load.
        <br />
        <br />
        Lexi was built as a practical demonstration of how multimodal AI can create more equitable educational experiences by adapting curriculum content to the learner, not forcing the learner to adapt to the interface.
      </p>,
    ],
    links: [
      "https://lexi-learning.vercel.app/",
      "https://github.com/JayWu0512/Lexi",
      "https://youtu.be/WBUIakMCIl0",
      "https://ai.studio/apps/drive/1vEyn_bwhbdFoCUuyqOFPy5h6jzRdK8Pw?fullscreenApplet=true"
    ],
    imgs: [
      lexi_focus_zone,
      lexi_math_play,
      lexi_resources,
      lexi_viz_lab
    ],
    appendix: [
      <p key="1">
        <strong>Tech</strong> <br />
        React, TypeScript, Vite, Tailwind CSS, Google AI Studio, Gemini 3 Pro, Web Speech API, Multimodal Reasoning
      </p>,
    ],
  },
  {
    title: "FinScope3D - Multimodal Financial QA Platform",
    image: finscope3d,
    description: [
      <p key="1">
        FinScope3D is a multimodal financial QA system that integrates natural language understanding, 
        named entity recognition (NER), structured and unstructured data processing, and predictive modeling to deliver insightful responses to financial queries.
      </p>,
      "Preview link and presentation is available below, and the source code is on GitHub."
    ],
    links: [
      "https://drive.google.com/file/d/1ua_CjsZJFX0CzS_Aortgt-NMUekr0hUb/view",
      "https://github.com/JayWu0512/FinScope3D",
      "https://www.youtube.com/watch?v=rx6D4VRTPIQ",
    ],
    imgs: [finscope3d_structure, finscope3d_chat, finscope3d_youtube],
    appendix: [
      <p key="1">
        <strong>Tech</strong> <br /> Python, SQL, LLM, HuggingFace, LangChain, ChromaDB, LightGBM, Gradio
      </p>,
    ],
  },
  {
    title: "Causal Analysis of Opioid Control Policies",
    image: opioid,
    description: [
      <p key="1">
        <strong>This project evaluates the causal impact of opioid control policies in Florida and Washington using longitudinal public-health and supply data.</strong>
        <br />
        We studied two state-level interventions with different policy designs: Florida&apos;s 2010 pill-mill crackdown and Washington&apos;s 2012 opioid prescribing guidelines. The goal was to estimate whether these policies were associated with meaningful reductions in prescription opioid supply and overdose mortality.
        <br />
        <br />
        To do this, we built a harmonized county-year panel by combining ARCOS shipment records, CDC mortality data, and Census/IPUMS population estimates, then standardized outcomes as morphine milligram equivalents shipped per 1,000 residents and overdose deaths per 100,000 residents.
        <br />
        <br />
        There are 4 key parts of the analysis:
        <br />
        <strong>Data Engineering Pipeline:</strong> Cleaned and merged multi-source opioid shipment, mortality, and population datasets using county FIPS codes to construct an analysis-ready county-year panel.
        <br />
        <strong>Outcome Construction:</strong> Converted shipment data into per-capita MME measures and mortality data into overdose death rates so policy effects could be compared across states and years.
        <br />
        <strong>Pre-Post and Difference-in-Differences Analysis:</strong> Combined trend visualization with DiD estimation to compare treated states against geographically and behaviorally similar control states.
        <br />
        <strong>Sensitivity and Data Quality Checks:</strong> Tested multiple missing-data strategies and population cutoffs to handle suppression and improve the stability of mortality estimates.
        <br />
        <br />
        The final results show a sharp and sustained post-2010 decline in opioid shipments in Florida, along with a relative decline in mortality versus nearby controls. Washington showed smaller and less persistent changes, suggesting that guideline-based interventions alone may have weaker effects than enforcement-heavy policy actions in this setting.
      </p>,
    ],
    links: [],
    imgs: [
      opioid_summary1,
      opioid_summary2,
      opioid_summary3
    ],
    appendix: [
      <p key="1">
        <strong>Tech</strong> <br />
        Python, Pandas, Jupyter Notebook, Statsmodels, Matplotlib, Difference-in-Differences, Public Health Data Integration
      </p>,
    ],
  },
  {
    title: "Music Mental Health Analysis",
    image: music_logo,
    description: [
      <p key="1">
        <strong>This project analyzes how music-listening behavior relates to self-reported mental-health symptoms using an R-based statistical workflow.</strong>
        <br />
        Using the Music &amp; Mental Health (MxMH) survey dataset from Kaggle, we studied whether daily listening time and streaming-platform choice were meaningfully associated with depression symptoms, and whether music behavior could help identify respondents with high depression scores.
        <br />
        <br />
        The analysis was designed for a university counseling and wellness stakeholder who wanted to know whether music-listening habits could serve as low-burden screening signals for student mental-health outreach.
        <br />
        <br />
        There are 4 main parts of the project:
        <br />
        <strong>Data Cleaning and Preparation:</strong> Cleaned survey responses, removed unreliable BPM data and invalid Yes/No entries, filtered out missing platform and mood-effect records, and created a binary high-depression outcome for downstream modeling.
        <br />
        <strong>Poisson Regression for Depression Scores:</strong> Modeled depression scores as a function of listening hours, primary streaming platform, and their interaction, while controlling for age, anxiety, insomnia, OCD, genre preferences, and music-use context variables.
        <br />
        <strong>Logistic Regression for High Depression Risk:</strong> Estimated whether additional listening time increased the odds of reporting high depression symptoms, then evaluated performance with confusion matrices, ROC curves, and AUC diagnostics.
        <br />
        <strong>Stakeholder-Focused Interpretation:</strong> Translated statistical findings into practical guidance for counseling services, emphasizing that music behavior may provide context but should not replace validated mental-health indicators.
        <br />
        <br />
        The final results show that listening hours alone are not a reliable indicator of depression risk. Associations between listening time and depression vary by streaming platform, while anxiety and insomnia are much stronger and more consistent predictors of elevated depression symptoms.
      </p>,
    ],
    links: [],
    imgs: [
      music_plot1,
      music_plot2,
      music_plot3,
      music_plot4,
      music_plot5
    ],
    appendix: [
      <p key="1">
        <strong>Tech</strong> <br />
        R, Quarto, tidyverse, dplyr, ggplot2, car, broom, pROC, caret, ResourceSelection, Poisson Regression, Logistic Regression
      </p>,
    ],
  },
  {
    title: "Memory Augmented LSTM Research",
    image: lstm_logo,
    description: [
      <p key="1">
        <strong>This project studies how external memory modules can improve long-context language modeling beyond a standard LSTM.</strong>
        <br />
        Traditional LSTM language models struggle to retain important information across long sequences because they rely on a fixed hidden state and are vulnerable to vanishing-gradient effects. This research project introduces a Memory-Augmented LSTM framework that explicitly stores and retrieves past context to improve long-range question-answering and next-token prediction.
        <br />
        <br />
        The system combines a base LSTM encoder-decoder with short-term and long-term memory components, then evaluates how each added memory mechanism changes performance across progressively more capable model variants.
        <br />
        <br />
        There are 4 core parts of the research:
        <br />
        <strong>Base LSTM Language Model:</strong> Built a baseline character-level LSTM encoder-decoder for token prediction, which served as the reference point for all memory ablation experiments.
        <br />
        <strong>Short-Term Memory Design:</strong> Added summarization and token-budget control so recent conversational history could be compressed into a compact context representation without overwhelming the input sequence.
        <br />
        <strong>Long-Term Memory Design:</strong> Extended the model with named-entity memory and semantic retrieval so older but relevant information could be recalled through structured features and embedding-based similarity search.
        <br />
        <strong>Ablation and Cross-Domain Evaluation:</strong> Compared five model variants on a synthetic SkillMiner QA benchmark and a real Dog-Cat QA dataset using STM/LTM accuracy, LLM-as-a-judge scores, difflib similarity, and training-loss trends.
        <br />
        <br />
        The final results showed a clear memory-performance tradeoff: the full-memory model achieved the best short-term memory accuracy on the synthetic benchmark, while the NER-enhanced model achieved the strongest long-term memory accuracy and converged earlier. On the real dog-cat dataset, all variants reduced loss but struggled to generalize, highlighting the challenge of domain transfer for memory-augmented sequence models.
      </p>,
    ],
    links: [
      "https://github.com/JayWu0512/memory-augmented-lstm-research"
    ],
    imgs: [
      lstm_plot1,
      lstm_plot2,
      lstm_plot3
    ],
    appendix: [
      <p key="1">
        <strong>Tech</strong> <br />
        Python, PyTorch, LSTM, spaCy NER, Semantic Retrieval, OpenAI Evaluation, Character-Level Tokenization, Long-Context QA, Ablation Study
      </p>,
    ],
  },

  {
    title: "My Personal Website",
    image: logo,
    description: [
      <p key="1">
        This is my first project to establish a personal website, featuring
        several pages: <br />
        <br />
        <strong>About:</strong> Introduces my work experience, education, and certifications.
        <br />
        <br />
        <strong>Technologies:</strong> Highlights the frontend, backend, database, and tools I’ve used. <br />
        <br />
        <strong>Projects:</strong> Showcases all ongoing and completed projects.
        <br />
        <br />
        <strong>Resume:</strong> Contains my CV. <br />
        <br />
      </p>,
      "The website was initially based on a GitHub template by Paven MG (linked below)." +
        " I customized and extended it, with significant changes to the 'About' and 'Projects' sections." +
        " In the 'About' page, I reformatted the education section to highlight what sets me apart from other college students." +
        " The 'Projects' page required more extensive modifications, including fade animations and expandable content." +
        " Through this project, I gained valuable experience with tools such as npm and frameworks like React.js.",
    ],
    links: [
      "https://github.com/pavanmg007/react-developer-portfolio-template",
      "https://sung-tse-wu-jay.vercel.app/",
      "https://github.com/JayWu0512/sung-tse-wu-jay.github.io",
    ],
    imgs: [website],
    appendix: [
      <p key="1">
        <strong>Tech</strong> <br /> Javascript, HTML, CSS, npm, Node.js
      </p>,
    ],
  },

  {
    title: "EduFER: Facial Expression Recognition for Student Engagement",
    image: edufer_logo,
    description: [
      <p key="1">
        <strong>EduFER is a real-time student-engagement monitoring system that uses facial expression recognition to help instructors identify disengaged students as class is happening.</strong>
        <br />
        The project was designed for an EdTech product stakeholder who needed a practical classroom tool, not just a benchmark model. Our goal was to detect disengagement reliably enough to support timely instructional intervention while still keeping the system computationally efficient for real-world deployment.
        <br />
        <br />
        We compared multiple pretrained image-classification models and focused especially on whether they could identify <strong>Not Engaged</strong> students, since those are the most actionable cases for instructors. Beyond accuracy, we also evaluated interpretability, class-imbalance handling, and fairness across student groups.
        <br />
        <br />
        There are 4 main parts of the project:
        <br />
        <strong>Model Selection for Deployment:</strong> Fine-tuned ResNet, Vision Transformer, and VGG16 on a student-engagement dataset, then compared them on disengaged detection, engaged detection, overall performance, and training time.
        <br />
        <strong>Class-Imbalance Experiments:</strong> Tested weighted loss, oversampling, and their combination to improve recall on the underrepresented disengaged class, which represented the most important classroom intervention target.
        <br />
        <strong>Interpretability and Reliability Analysis:</strong> Used Grad-CAM to inspect where the model was attending and found that predictions were not always grounded in facial cues, motivating more face-focused preprocessing and future landmark-based approaches.
        <br />
        <strong>Fairness and Practical Validation:</strong> Evaluated reliability across demographic groups and explored face-cropping as a deployment-oriented preprocessing strategy, showing where the current system works and where additional robustness improvements are still needed.
        <br />
        <br />
        The final recommendation was to use ResNet as the primary EduFER model because it provided the best balance between disengaged-student detection and training efficiency among the models tested. Additional experiments showed that weighted loss and oversampling both improved disengagement detection over the baseline, while interpretability and fairness checks revealed important areas for future improvement before broader deployment.
      </p>,
    ],
    links: [],
    imgs: [
      edufer_plot1,
      edufer_plot2,
      edufer_plot3,
      edufer_plot4
    ],
    appendix: [
      <p key="1">
        <strong>Tech</strong> <br />
        Python, ResNet, Vision Transformer, VGG16, Grad-CAM, Class Imbalance Handling, Oversampling, Weighted Loss, Facial Expression Recognition, Real-Time Dashboard
      </p>,
    ],
  },
  {
    title: "EduCasual",
    image: educasual_logo,
    description: [
      <p key="1">
        <strong>EduCasual is a causal analysis project studying how online student engagement affects academic performance using OULAD panel data.</strong>
        <br />
        The project was built for online learning platform teams, course designers, and instructors who need evidence on whether engagement-building features such as reminders, gamification, and structured nudges actually improve outcomes rather than simply increasing activity.
        <br />
        <br />
        Using student-assessment panel data from the Open University Learning Analytics Dataset, we examined whether students score better during periods when they engage more than usual, and whether those gains differ across student backgrounds.
        <br />
        <br />
        There are 4 main parts of the analysis:
        <br />
        <strong>Panel Data Construction:</strong> Merged assessment records, assessment metadata, VLE interaction logs, and student demographic data to build a student-assessment panel with 173,739 observations.
        <br />
        <strong>Engagement Measurement:</strong> Defined engagement as total platform clicks in the 30 days before each assessment, then log-transformed the measure to reduce skew and make comparisons more stable.
        <br />
        <strong>Causal Inference Design:</strong> Estimated two-way fixed-effects panel regressions with student and assessment fixed effects to isolate within-student changes in performance while controlling for time-invariant ability and assessment difficulty.
        <br />
        <strong>Heterogeneity Analysis:</strong> Tested whether the engagement-performance relationship differed by socioeconomic status and education background to identify which student groups may benefit most from engagement interventions.
        <br />
        <br />
        The final results showed that students perform better when they are more engaged than usual, even after controlling for student- and assessment-level differences. The gains from engagement were strongest for students with lower education backgrounds, while socioeconomic background did not meaningfully change the effect, suggesting that engagement features are broadly useful but may deliver especially high value for academically less-prepared learners.
      </p>,
    ],
    links: [],
    imgs: [
      educasual_plot1,
      educasual_plot2,
      educasual_plot3,
      educasual_plot4
    ],
    appendix: [
      <p key="1">
        <strong>Tech</strong> <br />
        Python, Pandas, PanelOLS, Fixed Effects Regression, Causal Inference, OULAD, Educational Analytics, Panel Data
      </p>,
    ],
  },

  {
    title: "Neural Network - Multi-class Prediction on CIFAR-10 dataset",
    image: neural_network,
    description: [
      <p key="1">
        This is a Python project that builds a Neural Network for multi-class prediction on the CIFAR-10 dataset. 
        Using ReLU activation and softmax loss, it performs forward and backward passes with matrix operations. 
        The training process is validated through visualizations of cost and accuracy history to ensure model performance and reliability.
      </p>,
      "The source code is on GitHub."
    ],
    links: [
      "https://github.com/JayWu0512/StanCode_Projects/tree/main/StanCode_Projects/neural_netwrok_multi-class_%20prediction_on%20_CIFAR-10_dataset",
    ],
    imgs: [],
    appendix: [
      <p key="1">
        <strong>Tech</strong> <br /> Python(Deep Learning)
      </p>,
    ],
  },

  {
    title: "Rotten Tomatoes Movie Review AI Rating System",
    image: rotten_tomato,
    description: [
      <p key="1">
        This is a Python project that develops a Rotten Tomatoes Movie Review AI Rating System. 
        Using logistic regression and stochastic gradient descent, it classifies movie reviews as positive or negative. 
        The system includes a manual prediction feature and rigorous testing with custom examples to ensure accuracy and reliability.
      </p>,
      "The source code is on GitHub."
    ],
    links: [
      "https://github.com/JayWu0512/StanCode_Projects/tree/main/StanCode_Projects/rotten_tomatoes_movie_review_AI_rating_system",
    ],
    imgs: [],
    appendix: [
      <p key="1">
        <strong>Tech</strong> <br /> Python(Machine Learning)
      </p>,
    ],
  },

  {
    title: "Breakout Game",
    image: breakout_game,
    description: [
      <p key="1">
        This is a sample of a brick-breaking game implemented in Python, 
        which utilizes object-oriented programming and event-driven programming to create a dynamic and interactive experience.
      </p>,
      "Preview link is available below, and the source code is on GitHub."
    ],
    links: [
      "https://www.youtube.com/watch?v=o63KPoIXJS4&list=PL6FWNwNPGCE56gP3lxhYPLoUbqE_unUiP&index=1",
      "https://github.com/JayWu0512/StanCode_Projects/tree/main/StanCode_Projects/break_out_game",
    ],
    imgs: [],
    appendix: [
      <p key="1">
        <strong>Tech</strong> <br /> Python(Object-Oriented Programming)
      </p>,
    ],
  },

  {
    title: "Name Popularity Searching System",
    image: name_searching,
    description: [
      <p key="1">
        This is a sample project that utilizes data structures and data visualization, 
        allowing users to input multiple names and generate a trend chart of baby name rankings from 1990 to 2020, 
        helping them understand the popularity of names across different years.
      </p>,
      "Preview link is available below, and the source code is on GitHub."
    ],
    links: [
      "https://www.youtube.com/watch?v=9JIc0CZwsa4&list=PL6FWNwNPGCE56gP3lxhYPLoUbqE_unUiP&index=4",
      "https://github.com/JayWu0512/StanCode_Projects/tree/main/StanCode_Projects/name_searching_system",
    ],
    imgs: [],
    appendix: [
      <p key="1">
        <strong>Tech</strong> <br /> Python(Data Structure)
      </p>,
    ],
  },

  {
    title: "Boggle Game Solver",
    image: boogle,
    description: [
      <p key="1">
        This is a sample project in Python that mimics a common board game. When a 4x4 grid of letters is displayed, 
        Python will attempt to find all possible answers using an algorithm.
      </p>,
      "Preview link is available below, and the source code is on GitHub."
    ],
    links: [
      "https://www.youtube.com/watch?v=gbLlbpOppzA&list=PL6FWNwNPGCE56gP3lxhYPLoUbqE_unUiP&index=3",
      "https://github.com/JayWu0512/StanCode_Projects/tree/main/StanCode_Projects/boggle_game_solver",
    ],
    imgs: [],
    appendix: [
      <p key="1">
        <strong>Tech</strong> <br /> Python(Algorithm)
      </p>,
    ],
  },
];
