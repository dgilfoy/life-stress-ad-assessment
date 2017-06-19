/**
 * @file book.ts
 * File in charge of listing resources for the assessment module.
 
 * Name: book.ts
 * Purpose of this file is to provide various functionality for the Assessments Module
 *
 * Modified by Daniel Gilfoy <daniel.gilfoy@tee2.org> on 5/13/2017.
 *
 * Assessment Module - Life Stress
 *
 * Copyright © 2009-2017 United States Government as represented by
 * the Chief Information Officer of the National Center for Telehealth
 * and Technology. All Rights Reserved.
 *
 * Copyright © 2009-2017 Contributors. All Rights Reserved.
 *
 * THIS OPEN SOURCE AGREEMENT ("AGREEMENT") DEFINES THE RIGHTS OF USE,
 * REPRODUCTION, DISTRIBUTION, MODIFICATION AND REDISTRIBUTION OF CERTAIN
 * COMPUTER SOFTWARE ORIGINALLY RELEASED BY THE UNITED STATES GOVERNMENT
 * AS REPRESENTED BY THE GOVERNMENT AGENCY LISTED BELOW ("GOVERNMENT AGENCY").
 * THE UNITED STATES GOVERNMENT, AS REPRESENTED BY GOVERNMENT AGENCY, IS AN
 * INTENDED THIRD-PARTY BENEFICIARY OF ALL SUBSEQUENT DISTRIBUTIONS OR
 * REDISTRIBUTIONS OF THE SUBJECT SOFTWARE. ANYONE WHO USES, REPRODUCES,
 * DISTRIBUTES, MODIFIES OR REDISTRIBUTES THE SUBJECT SOFTWARE, AS DEFINED
 * HEREIN, OR ANY PART THEREOF, IS, BY THAT ACTION, ACCEPTING IN FULL THE
 * RESPONSIBILITIES AND OBLIGATIONS CONTAINED IN THIS AGREEMENT.
 *
 * Government Agency: The National Center for Telehealth and Technology
 * User Registration Requested. Please send email
 * with your contact information to: robert.a.kayl.civ@mail.mil
 * Government Agency Point of Contact for
 * Original Software: robert.a.kayl.civ@mail.mil
 */ 
export interface BookInterface{
  id: number;
  title: string;
  description: string;
  pages: BookPageInterface[];
}

export interface BookPageInterface{
  id: number;
  title: string;
  content: string;
}

const makeBook = (id:number, title:string, description: string, pages: BookPageInterface[] = []): BookInterface => {
  return {
    id,
    title,
    description,
    pages
  }
}

const makePage = (id:number, title:string, content: string): BookPageInterface => {
  return {
    id,
    title,
    content
  }
}

const page1Content = `
  <div class="field-items"><div class="field-item even" property="content:encoded"><p>Stress affects every aspect of your being: your body, thoughts, your emotions, and your behavior.&nbsp; In this chapter you will understand:</p><ul style="margin-left: 320px;"><li>The definition of stress</li><li>How stress effects performance</li><li>The signs of stress</li></ul><p><br><strong>1.1 Definition of Stress</strong></p><p>Stress is the body’s reaction to external or internal signals.&nbsp; These internal or external “signals” that promote stress are called “stressors”.&nbsp; Your body and brain go into “alert” mode when responding to stressors.&nbsp; You naturally react to a danger threat, whether the threat is real or not.&nbsp; You react by physically and mentally preparing to fight or run (take flight) from the threat.&nbsp; This reaction is known as “fight or flight”.<br><br><strong>1.2 Effects of Stress on Performance</strong></p><p>While deployed, you had to stay “on guard” most of the time.&nbsp; Your safety, your life, and the lives of others depended on it.&nbsp; Returning from deployment, you may continue to feel “amped-up” or think you need to stay “on guard” to be safe.<br><br>The increased stress that helps you respond to threats during deployment can prevent you from coping with stressors in daily life.&nbsp; When your body is under too much stress, you’re more likely to:</p><ul style="margin-left: 40px;"><li>Miss important details</li><li>Misinterpret situations</li><li>Perform poorly on everyday tasks</li></ul><p><br>Knowing when you are under too much stress can help you avoid serious physical effect of long-term stress:</p><ul style="margin-left: 40px;"><li>Hypertension (high blood pressure)</li><li>Heart disease</li><li>Immune system suppression</li><li>Increased risk for infectious disease</li><li>Gastrointestinal disorders such as colitis</li><li>Asthma</li><li>Depression</li><li>Anxiety disorders</li></ul><p><br>1.3 Signs of Stress</p><p>Here are signs that you're experiencing stress:</p><p><br><strong>Physical Signs</strong></p><ul style="margin-left: 40px;"><li>Headaches</li><li>Excessive sweating</li><li>Stomach problems</li><li>Skin breakout problems</li><li>Tense muscles</li><li>Weight gain or loss</li><li>Sleep Problems</li><li>Shortness of Breath</li><li>No energy or feeling fatigued</li><li>Loss of sex drive</li><li>Unexplained hair loss</li><li>Rapid heart beat</li></ul><p><br><strong>Behavioral Signs</strong></p><ul style="margin-left: 40px;"><li>Drinking too much alcohol</li><li>Using drugs</li><li>Eating more/ less than usual</li><li>Sleep problems/ difficulty sleeping</li><li>Increased tobacco use</li><li>Increased caffeine use</li><li>Nail biting, hair-twisting</li><li>Pacing</li><li>Grinding your teeth</li><li>Overdoing activities</li><li>Acting “bossy”</li><li>Laughing or crying inappropriately</li><li>Yelling or shouting</li><li>Picking fights</li><li>Driving too fast</li><li>Road rage</li><li>Compulsive gambling</li><li>Compulsive buying</li><li>Avoiding friends and family</li></ul><p><br><strong>Emotional Signs</strong></p><ul style="margin-left: 40px;"><li>Anxiety</li><li>Frustration</li><li>Quick irritability with others</li><li>Loss of interest in leisure and play</li><li>Sadness or depressed mood</li><li>Frequent uneasiness, restlessness</li><li>Anger, resentment, hostility</li><li>Feeling pressured or trapped</li><li>Sudden shifts in mood</li><li>Impatience</li><li>Increased mood sensitivity</li><li>Feeling emotionally numb</li><li>Overreacting to unexpected situations</li></ul><p><br><strong>Problems with Thinking</strong></p><ul style="margin-left: 40px;"><li>Trouble concentrating</li><li>Misunderstanding others</li><li>Trouble remembering things</li><li>Poor judgment</li><li>Confusion</li><li>Racing thoughts</li><li>Difficulty making decisions</li><li>Feeling overwhelmed</li><li>Repeating thoughts</li><li>Self-doubt or low self-confidence</li><li>Criticizing yourself</li><li>Negative “self-talk”</li></ul><p>&nbsp;</p></div></div>
`;

const page2Content = `
<div class="field-items"><div class="field-item even" property="content:encoded"><p>Stressors set off your stress response.&nbsp; In this chapter you will learn:</p>
<ol style="margin-left: 280px;"><li>The definition of stressors</li>
<li>The different types of stressors</li>
<li>How trigger stressors affect you</li>
</ol><p><br><strong>2.1 Definition of Stressors</strong></p>
<p>A “stressor” is anything you perceive as a personal threat or beyond your ability to manage.&nbsp; Stressors can be minor hassles or serious life challenges.&nbsp; Stressors can also be thoughts and memories of painful past events.&nbsp; Even though you’re unaware of it, you constantly monitor what’s going on around and inside you.&nbsp; You judge whether situations are a threat to your well-being.&nbsp; You also judge whether you can manage or cope with things.</p>
<p>&nbsp;</p>
<p><strong>2.2 Types of Stressors&nbsp;</strong></p>
<p>It’s important to understand the things that cause you to feel stressed.&nbsp; Once you know the sources of your stress, you will be able to anticipate and manage your stress more effectively. Here are some different types of stressors.</p>
<p><strong>Life Events and Stressful Living Conditions:</strong></p>
<ul style="margin-left: 40px;"><li>Death of loved one</li>
<li>Divorce</li>
<li>Martial Separation</li>
<li>Deployment to a war zone</li>
<li>Death of a comrade</li>
<li>Injury from an enemy attack</li>
<li>Other personal injury or illness</li>
<li>Separation from family/ friends due to deployment</li>
<li>Combat</li>
<li>Marriage</li>
<li>Loss of job</li>
<li>Start of a new job</li>
<li>Retirement</li>
<li>Pregnancy</li>
<li>Becoming a parent</li>
<li>Living with a physical disability</li>
<li>Chronic pain of illness</li>
<li>Caring for sick/ disabled family member</li>
<li>Being a single parent</li>
<li>Poverty</li>
<li>Living with a difficult relationship</li>
<li>Living with a special needs child (physical, emotional, behavior)</li>
<li>Living in household with alcoholism</li>
<li>Living in household with depression or other psychological illness</li>
</ul><p><br><strong>Personal Challenge Stressors:</strong></p>
<ul style="margin-left: 40px;"><li>Redeploying to find your role in the family has changed</li>
<li>Transitioning from service member to civilian</li>
<li>Feeling “out of the loop” while deployed</li>
<li>Trying to quit smoking</li>
<li>Weight concerns or dieting</li>
<li>Gambling or drinking too much</li>
<li>Loneliness</li>
<li>Trying to break a bad habit you developed during deployment</li>
<li>Dealing with serious injury</li>
<li>Going back to school after deployment</li>
</ul><p><br><strong>Environmental Stressors:</strong></p>
<ul style="margin-left: 40px;"><li>Bright lights</li>
<li>Flashing or strobe lights</li>
<li>Low light leading to eye strain</li>
<li>Traffic noise</li>
<li>Machine noise (lawnmower, airplane, factory machinery)</li>
<li>Intermittent unpredictable noise (train, barking, loud neighbors, cell phones)</li>
<li>Overheated/ under heated workspace or house</li>
<li>Overcrowded conditions (subway, workplace, neighborhood, mall, home)</li>
<li>Constant wind</li>
<li>Bad odors (sulfur, exhaust fumes, chemicals)</li>
<li>Uncomfortable office furniture</li>
<li>Clutter or debris in surroundings</li>
</ul><p><br><strong>2.3 Trigger Stressors</strong></p>
<p>Certain events that happen during daily living can trigger stress responses. For instance, after returning from deployment, it’s normal for sounds (a car backfiring), sights (upset children), or smells (diesel fuel) that you associated with stressful deployment triggers. Triggers may also remind you of stressful events from your life before the military. If you often over-react to things, or if ordinary events set you off, your stress level may be too high.</p>
</div></div>
`;

const page3Content = `
<div class="field-items"><div class="field-item even" property="content:encoded"><p>There are many healthy ways to manage your stress.&nbsp; In this chapter we will explore different skills and techniques.<br><br><strong>3.1 Quick Stress Reduction Exercises</strong></p>
<p>When stressed, your breathing becomes fast and shallow and your muscles tense.&nbsp; You can interrupt the stress response with slow, deep breathing and relaxing your muscles.<br><br><strong>3.2 Deep Breathing Technique</strong></p>
<p>Like any other skill you learn, deep breathing <strong><em>must be practiced</em></strong>.&nbsp; It is easy to learn and reduces tension, anxiety, and irritability.&nbsp; When you breathe slowly and deeply, your heart rate slows and your blood pressure is lowered.&nbsp; The following exercise takes 2 minutes:</p>
<ul style="margin-left: 40px;"><li>Slowly inhale air deeply into your belly until fully extended.&nbsp; Keep your chest still.</li>
<li>Now exhale slowly, allowing the air you breathe out to deflate your belly.</li>
<li>Pause naturally, and&nbsp;then repeat.</li>
<li>Inhale and exhale counting to the number eight, then inhale and exhale counting backward from eight.&nbsp;</li>
<li>Focus on breathing, counting, and relaxing.</li>
</ul><p><br>You <strong><em>will</em></strong> get results if you keep practicing!&nbsp;<br><br><strong>3.3 Progressive Muscle Relaxation Technique</strong><br><br>If you’re not in a position to fight or flee, you will continue to feel physically stressed.&nbsp; But if you can relax your muscles, your physical stress will subside.&nbsp; Learning to relax your muscles reduces tension and calms you.&nbsp; Here’s how to relax your muscles:</p>
<ul style="margin-left: 40px;"><li>Sit or lie in a comfortable position with your feet, hands, arms, and neck supported.</li>
<li>Take a few deep breaths and think the word “relax”.</li>
<li>Focus on your legs and feet.&nbsp; Tense your legs by flexing your feet and pointing your toes toward your upper body.&nbsp; You’ll feel tension spread through your feet and legs.</li>
<li>Hold for a few seconds and then release.&nbsp; Relax your feet and legs completely, while thinking the word “relax”.</li>
<li>Now focus on your belly.&nbsp; Tense your belly by pulling it in toward your spine.</li>
<li>Hold for a few seconds then release.&nbsp; Tense your hands and arms by making a tight fist and tensing your forearms, biceps, and triceps.</li>
<li>Hold for a few seconds and then release.&nbsp; Relax your hands and arms completely, while thinking the word “relax”.</li>
<li>Continue by tensing the following muscle groups:</li>
<li>Your shoulders</li>
<li>Your jaw</li>
<li>The muscles around your eyes</li>
<li>Your forehead</li>
<li>Hold the tension in each muscle group for a few seconds and then release the tension and think the word “relax”.</li>
<li>Once you complete this exercise, you should feel more relaxed and your stress level should decrease.</li>
</ul></div></div>
`;

const page4Conent = `
<div class="field-items"><div class="field-item even" property="content:encoded"><p>In this chapter you will learn several strategies you can use to help change the way you think about real life situations you find yourself that may cause you stress. Changing the way you think can change the way you feel.<br><br><strong>Mental Reframing</strong></p>
<p>The way people think about things affects their reactions to stress.&nbsp; After a deployment, you may believe the world is a more dangerous place or constantly worry that harm could come to you or your loved ones.&nbsp; Or you may feel you have less control over your life.&nbsp; These thoughts may cause you to look at situations and events differently than before you were deployed.&nbsp; It’s normal to think differently about your environment after a deployment.</p>
<p>Everyone has a constant stream of thoughts running through their minds—this is called <strong>self-talk</strong>.&nbsp; Self-talk reflects your beliefs and attitudes about the world, other people, and yourself.&nbsp; It’s important to examine your thoughts and beliefs carefully challenge those thoughts that are not realistic of helpful.</p>
<p>Mental reframing is a process you can learn to interrupt self-talk and challenge negative thoughts with more realistic, positive thoughts.&nbsp; There are 5 steps involved in mental reframing:</p>
<p><strong>Step 1: Self-monitoring</strong></p>
<p>Your first step in mental reframing is to monitor your thoughts (self-talk).&nbsp; Your awareness of self-talk in stressful situations will help you to prepare to <strong><em>think</em></strong> differently.</p>
<table cellspacing="0" cellpadding="0"><tbody><tr><td height="58">
<table width="100%" cellspacing="0" cellpadding="0"><tbody><tr><td>
<div>
<p>&nbsp;(<strong>A</strong>)ctivating event <strong>+</strong> (<strong>B</strong>)eliefs&nbsp; <strong>= </strong>(<strong>C</strong>)onsequences)</p>
</div>
</td>
</tr></tbody></table></td>
</tr></tbody></table><p><strong>Step 2: The ABC Method</strong></p>
<p>The second step in mental reframing is to identify those thoughts that cause feelings and motivate your behavior.&nbsp; In most situations, people do not automatically respond to events.&nbsp; People usually think about an event, about their ability to manage the situation, and <em>then</em> they respond.&nbsp; Often your thoughts or interpretation of a stressful event leads to a stress reaction.&nbsp; The “ABC” method is a good way to think of the relationship between thoughts and behaviors:</p>
<ol style="margin-left: 40px;"><li>An <u><strong>A</strong></u>ctivating event is a stressful situation or event</li>
<li>The event triggers thought or <u><strong>B</strong></u>eliefs</li>
<li>As a <u><strong>C</strong></u>onsequence your beliefs about the event change your stress level</li>
</ol><p><br>Here is an example of the ABC model:</p>
<ul style="margin-left: 40px;"><li><u>A</u><u>ctivating event</u>: While on leave, you hop on a bus to visit family. The bus gets stuck in traffic because of road construction.</li>
<li><u>Beliefs</u>: As you take in the situation, you begin to form beliefs about the event. Your beliefs determine whether you see this as a minor inconvenience or a major problem.</li>
<li><u>Consequences</u>: The consequence of your beliefs is that you feel stressed OR relaxed for the rest of the ride, depending on what your beliefs tell you.</li>
</ul><p><br><u>Negative Beliefs about the event</u></p>
<ul style="margin-left: 40px;"><li>This will take forever.&nbsp; I’ll never get home.</li>
<li>Why does this always happen to me?</li>
<li>They always do construction at the worst times.</li>
</ul><p><u>Positive Beliefs about the event</u></p>
<ul style="margin-left: 40px;"><li>I’ll just be a few minutes late.</li>
<li>I’m going to listen to some music while I wait.</li>
<li>I’m glad they are fixing the road</li>
</ul><p><br><u>Step 3: Negative Thought Patterns</u></p>
<p>The third step in mental reframing is to recognize when your beliefs about an event or situation are unhelpful or negative.&nbsp; The following are examples of negative thought patterns that can increase stress levels:</p>
<ul style="margin-left: 40px;"><li><u>All or Nothing</u>: You tend to experience things in black and white terms.&nbsp; You see situations as either entirely “<em>good</em>” or “<em>bad</em>”, when there is clearly a middle ground.&nbsp; An example of all-or-nothing thinking is that <strong><em>either</em></strong> you are perfect <strong><em>or </em></strong>you’re a failure.</li>
<li><u>Exaggeration</u>: Sometimes exaggeration is also called “catastrophizing”.&nbsp; This thinking pattern involves blowing the imagined consequences of an event out of proportion.&nbsp; You may see minor problems as being “horrible” or “disastrous”.&nbsp; Others may say “you’re making a mountain out of a molehill”.&nbsp; Sometimes it is hard to pinpoint your trigger.&nbsp; If you can’t identify it, don’t worry.&nbsp; Work on relaxing and calming yourself.</li>
<li><u>Overgeneralization</u>: &nbsp;You take an isolated experience or piece of information and draw the wrong conclusions.&nbsp; You see isolated negative events as a never-ending pattern of negative events or defeat.&nbsp; For example, if someone turns you down for a date, you conclude that you are <em>always</em> rejected or that you will <em>never</em> find the right person.&nbsp; Look for words such as <strong>always</strong> or <strong>never </strong>in your self-talk as signs that you are over generalizing.</li>
<li><u>Mind-reading</u>: You assume you know what another person is thinking, even though you have no evidence to back up your assumptions.&nbsp; When you mind-read, you almost always assume that someone is thinking the worst about you.&nbsp; For example, you might think your friends don’t want to hear about your deployment experiences.&nbsp; In reality, your friends want to know what happened but feel awkward asking you questions.&nbsp; Look for phrases like <strong>he/ she probably thinks</strong>...or <strong>they don’t understand</strong>… in your self-talk as signs that you are mind-reading.</li>
</ul><p><br><u>Step 4: Challenging Your Thoughts</u></p>
<p>The fourth step in mental reframing is to challenge your negative thinking patterns and self-talk.&nbsp; This takes a lot of practice and patience because self-talk is a reflection of your core beliefs about yourself, others, and the world.</p>
<p>Look carefully for evidence that challenges negative or stressful self-talk.&nbsp; In order to challenge your negative thinking, you can ask yourself the following questions:</p>
<ul style="margin-left: 40px;"><li>Is there evidence for or against my stressful thought or belief?</li>
<li>Am I thinking in all-or-nothing terms?</li>
<li>Am I using words or phrases such as disastrous, horrible, and awful?</li>
<li>Am I making sweeping generalizations based on a single event?</li>
<li>Am I using words like always and never in my self-talk?</li>
<li>Am I judging what other people think, when I really don’t know what they think?</li>
<li>Is my information source reliable?</li>
<li>Are my beliefs based on feelings rather than facts?</li>
</ul><p><br><u>Step 5: Using Positive Self-talk</u></p>
<p>The final step in mental reframing is to replace negative, stressful self-talk with positive, empowering self-talk.&nbsp; You may be surprised at how changing your outlook on stressful situations or events can change your life.&nbsp; Every situation presents opportunities to learn and grow.&nbsp; The more you focus on the positive aspects of the situation, the more control you have over your stress reactions.<br><br><strong>3.5 Stress Journal</strong></p>
<p>Keeping a stress journal helps you realize when you’re having a stress response.&nbsp; The earlier you identify your stress reactions, the sooner you can do something about them.&nbsp; Every time you feel stressed, stop and look closely at your situation.&nbsp; Then enter the following information into your stress journal.&nbsp;</p>
<ul style="margin-left: 40px;"><li>Where was I?</li>
<li>What was going on around me?</li>
<li>Who was I with?</li>
<li>How could I have used more positive thinking and realistic self-talk to handle stress?</li>
<li>Could I identify a negative thinking pattern? All-or-nothing thinking</li>
<li>Exaggeration (catastrophizing)</li>
<li>Overgeneralization</li>
<li>Mind-reading</li>
<li>What was I doing?</li>
<li>What was I thinking?</li>
<li>What was I saying to myself (self-talk)?</li>
<li>What signs of stress was I having (physical, psychological, emotional)?</li>
<li>On a scale of 0-10, how stressful was this situation?&nbsp; (Zero being as calm and relaxed as possible.&nbsp; Ten being severe stress and panic.</li>
</ul><p><br><strong>3.6 Emotion-focused Strategies for Coping with Stress</strong></p>
<p>Often we simply try to cope with stress without realizing we can change the situations and conditions that cause the stress.&nbsp; We <strong>DO</strong> have some control over the causes of stress in our lives.</p>
<p><em><u>Some stressors can be eliminated or diminished easily. </u></em></p>
<p><u>Example</u>: Milo has had a nagging toothache for a few weeks that is contributing to his stress and irritability.&nbsp; But he can choose to go to a dentist and take care of the problem.</p>
<p><em><u>Some stressors can be controlled but the effort we have to expend is much greater.</u></em></p>
<p><u>Example</u>: Maria needs to pass a course to get into mechanics training.&nbsp; She finds mechanics training difficult and is stressed that she won’t pass the course.&nbsp; But she can control her stress by studying more in her free time.</p>
<p><em><u>Some stressful situations are simply out of our control.</u></em></p>
<p><u>Example</u>: Lisa just found out she may have a serious illness.&nbsp; She must wait several days for lab results.&nbsp; Lisa has no control over the results or how long she must wait.&nbsp; To the right you will find strategies to help you overcome negative feelings cause by stress.</p>
<p align="left"><br><u>Emotion-focused Strategies</u></p>
<p>When faced with challenges outside your control try one of these strategies:</p>
<ul style="margin-left: 40px;"><li>Listen to music</li>
<li>Get together with a friend</li>
<li>Read a book or watch a movie</li>
<li>Get some physical exercise</li>
<li>Engage in spiritual activities like prayer</li>
<li>Try yoga</li>
<li>Meditate</li>
<li>Intake some humor</li>
<li>Take a nap</li>
<li>Write in a journal or diary</li>
<li>Take a hot bath</li>
<li>Help others in need</li>
<li>Practice “anxiety surfing” (riding out anxieties until they naturally subside)</li>
<li>Express you stress creatively (painting, playing a musical instrument)</li>
<li>Take a “mental holiday” (go to the next page for more information about how to take a mental holiday anytime and at any place)</li>
</ul><p><br><u>Tips For Taking A Mental Holiday</u></p>
<p>You can use this technique almost any time in any place.&nbsp; Close your eyes and take 3 deep breaths.&nbsp; Imagine you are in a place where you have found peace in the past.&nbsp; Try involving all your senses.&nbsp; You may hear birds singing; feel the warmth of the sun on your shoulders, or smell sea salt.&nbsp; Engage all your senses and enjoy the sensations for a moment or two before returning to the here-and-now.</p>
<p>You may want to print out the list of emotion-focused strategies and add your own.&nbsp; For more information visit the workshop.</p>
<p><br><strong>3.7 Problem-solving Strategies for Coping with Stress</strong></p>
<p>When you CAN control the causes of your stress, it’s best to problem-solve the situation.&nbsp; The <em>most </em>important step in problem-solving is committing to it!&nbsp; If you have the mindset that “I need to fix this” or “I need to do something different“ you will likely find a solution.&nbsp; Problem-solving is a skill you can learn through practice.</p>
<ul style="margin-left: 40px;"><li><strong>STEP 1: </strong>Recognize the Signals of Stress</li>
<li><strong>STEP 2: </strong>Define the Problem</li>
<li><strong>STEP 3: </strong>Set a Goal</li>
<li><strong>STEP 4: </strong>Brainstorm Possible Solutions</li>
<li><strong>STEP 5: &nbsp;</strong>Evaluate Possible Solutions</li>
<li><strong>STEP 6: &nbsp;</strong>Choose the Best Solution Based on Pros and Cons</li>
<li><strong>STEP 7: &nbsp;</strong>Make a Plan and Try Your Solution</li>
<li><strong>STEP 8: </strong>&nbsp;Assess the Solution’s Progress</li>
<li><strong>STEP 9: </strong>&nbsp;If the First Solution Didn’t Work, Try Another!</li>
</ul><p>Let’s take a closer look at each step and how you can practice problem-solving strategies for coping with stress.</p>
<p><strong>STEP 1:</strong> Recognize the Signals of Stress</p>
<p>Learn to watch for signs and situations that often cause stress.</p>
<p><u>Example</u>: &nbsp;<em>Max has recently returned from Iraq.&nbsp; He couldn’t wait to go home to his wife and son,&nbsp;but now that he is home, he feels anxious and irritable every night as he drives home from base.</em></p>
<p><strong>STEP 2: </strong>Define the Problem</p>
<p>Find the real problem and be specific about how it triggers your stress reaction.&nbsp;</p>
<p><u>Example</u>: <em>Max asks himself: “What is it about going home that makes me feel stressed?”&nbsp; He realizes his stress is related to his son’s poor performance at school and bad attitude at home.</em></p>
<p><strong>STEP 3: </strong>Set a Goal</p>
<p>Try to set a goal for how to respond in a way that reduces stress.</p>
<p><em>Max knows he can’t control how other people act and that he can’t turn Max Jr. into a “perfect” son. But, as a father, Max does have some influence over his son.&nbsp; He decides to set specific, manageable goals, such as getting Max Jr. to spend more time on homework and help more around the house. Wait to go home to his wife and son, but now that he is home, he feels anxious and irritable every night as he drives home from base.</em></p>
<p>&nbsp;<strong>STEP 4: </strong>Brainstorm Possible Solutions</p>
<p>Get creative about possible solutions. When you brainstorm, don’t judge any of the solutions, just let them flow. Even if some ideas seem ridiculous, write them down. &nbsp;</p>
<p><u>Example</u>: <em>Max starts brainstorming the following solutions without judging them. </em><em>For instance,</em> g<em>round Max Jr. until he changes his attitude and does his homework; send Max Jr. to live with his grandmother; spend more quality time with Max Jr. and talk to him about problem solving; get a tutor for Max Jr.</em></p>
<p><strong>STEP 5: &nbsp;</strong>Evaluate Possible Solutions</p>
<p>Review the list of possible solutions and evaluate how well they may address the problem.</p>
<p><u>Example</u>: <em>Max makes a list of the pros and cons of each possible solution.</em></p>
<p><strong>STEP 6: &nbsp;</strong>Choose the Best Solution Based on Pros and Cons</p>
<p>Problem-solving experts suggest giving special considerations to the solution with the least cons. You may want to pick a second solution in case the first one does not work.</p>
<p><u>Example</u>: &nbsp;<em>Max studies his list of pros and cons for each possible solution.&nbsp; He finds that the solution with the most pros and fewest cons is to spend more quality time with his son.&nbsp; His back-up solution is to hire a tutor to help Max Jr. with his homework.</em></p>
<p><strong>STEP 7: &nbsp;</strong>Make a Plan and Try Your Solution</p>
<p>Now create a specific plan to carry out your solution. You may need to divide the plan into steps.&nbsp;</p>
<p><u>Example</u>: <em>Max has decided on a possible solution and forms a plan.&nbsp; He will sit down with Max Jr. this weekend to make a list of the boy’s favorite things to do.&nbsp; Then they will create a plan for Max Jr. to earn some privileges by spending more time on homework and helping around the house.&nbsp; Max will also make himself available in the evenings to help his son with homework.</em></p>
<p><strong>STEP 8: </strong>&nbsp;Assess the Solution’s Progress</p>
<p>Reevaluate the situation and see how the actions have changed things.</p>
<p><u>Example</u>: <em>A month later, Max evaluates his solution by contacting Max Jr’s teachers and learns his son is improving in his schoolwork.&nbsp; He also sees that Max Jr. volunteers for more chores around the house.&nbsp; Max decides that he has met the goal he set for solving his problem.</em></p>
<p><strong>STEP 9: </strong>&nbsp;If the First Solution Didn’t Work, Try Another!</p>
<p>If your solution worked, your stress should diminish.&nbsp; If it didn’t work, try another solution from Step 5 until you find one that works.</p>
<p><u>Example</u>: <em>Max feels much less irritable and stressed now.&nbsp; In fact, he looks forward to coming home from work.&nbsp; He also knows if his first solution didn’t work, he could have tried his second solution of hiring a tutor</em></p>
</div></div>
`;

const book = makeBook(
  1,
  'Life Stress',
  `Stress affects every aspect of your being: your body, thoughts, your emotions, and your behavior.&nbsp; In this booklet you will learn about:
  What is stress and what causes it,
  How to notice the signs and symptoms of stress,
  Ways to manage stress and keep it under control,
  How to plan in advance for stressors in life
  `
);
const page1 = makePage(1,'1.0 - Introduction to Stress',page1Content);
const page2 = makePage(2,'2.0 - Stressors',page2Content);
const page3 = makePage(3,'3.0 - Self-Help Exercises for Managing Stress',page3Content);
const page4 = makePage(4,'4.0 - Self-Help Strategies for Managing Stress',page4Conent);

book.pages.push(page1);
book.pages.push(page2);
book.pages.push(page3);
book.pages.push(page4);

export default book;


