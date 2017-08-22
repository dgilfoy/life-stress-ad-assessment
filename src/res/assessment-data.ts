/**
 * @file assessment-data.ts
 * File in charge of returning data for the assessments module.
 
 * Name: assessment-data.ts
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
export const assessmentsDataJ = [
  {
    "id"            : 1,
    "title"         : "Worry",
    "questionPrefix": "",
    "maxScore"      : 100,
    "midScore"      : 85,
    "minScore"      : 0,
    "scoring"       : [
      [1,100,158,'HIGH',
        `<p>Your score is in a range typically associated with a high level of worry indicating that chronic worry is affecting your life.</p>`,
        `<p>Although only a healthcare professional can provide an actual diagnosis, your responses suggest you may be prone to a high degree of concern about bad things happening in your life.</p>`
      ],
      [2,85,99,'MODERATE',
        `<p>Your score is in a range typically associated with a moderate level of worry indicating that worry may be causing you some level of distress.</p>`,
        `<p>Although only a healthcare professional can provide an actual diagnosis, your responses suggest you may be prone to some degree of unrealistic concern about bad things happening in your life.</p>`
      ],
      [3,0,84,'LOW',
        `<p>Your score is in a range typically associated with a low level of worry indicating that chronic worry is probably not affecting your life.</p>`,
        `<p>Although only a healthcare professional can provide an actual diagnosis of an anxiety disorder, your results suggest that you are not likely to engage in catastrophic thinking and that you can accurately evaluate the likelihood of negative events occurring in your life.</p>`
      ]
    ],
    "scoringMode"   : 0,
    "image"         : 'intro-worry.png',
    "choices"       : [
          [
            {title: 'Never', value: '0', score: 0},
            {title: 'Almost Never', value: '1', score: 1},
            {title: 'Sometimes', value: '2', score: 2},
            {title: 'Fairly often', value: '3', score: 3},
            {title: 'Very often', value: '4', score: 4}
          ]
    ],
    "questions"     :[
      [1,'If I do not have enough time to do everything, I do not worry about it.','select',0],
      [2,'My worries overwhelm me.','select',0],
      [3,'I do not tend to worry about things.','select',0],
      [4,'Many situations make me worry.','select',0],
      [5,'I know I should not worry about things, but I just cannot help it.','select',0],
      [6,'When I am under pressure I worry a lot.','select',0],
      [7,'I am always worrying about something.','select',0],
      [8,'I find it easy to dismiss worrisome thoughts.','select',0],
      [9,'As soon as I finish one task, I start to worry about everything else I have to do.','select',0],
      [10,'I never worry about anything.','select',0],
      [11,'When there is nothing more I can do about a concern, I do not worry about it anymore.','select',0],
      [12,'I have been a worrier all my life.','select',0],
      [13,'I notice that I have been worrying about things.','select',0],
      [14,'Once I start worrying, I cannot stop.','select',0],
      [15,'I worry all the time.','select',0],
      [16,'I worry about projects until they are all done.','select',0]
    ]
  },
  {
    "id"            : 2,
    "title"         : "Stress",
    "questionPrefix": "In the last month, how often have you:",
    "maxScore"      : 2,
    "midScore"      : 92,
    "minScore"      : 58,
    "scoring"       : [
      [4,0,15,'LOW',
        `<p>Your score is in a range typically associated with low stress</p>`,
        `<p>Your responses suggest that you feel very much in control of your life at the moment. Your low level of stress suggests that you are either not experiencing significant challenges at this point in your life or that your coping skills are acting to protect you from stress.</p>`
      ],
      [5,16,18,'MODERATE',
        `<p>Your score is in a range typically associated with moderate stress.</p>`,
        `<p>Your responses suggest you are experiencing some stress right now. If you are feeling overwhelmed, that may affect your general well-being</p>`
      ],
      [6,19,24,'HIGH',
        `<p>Your score is in a range typically associated with high stress</p>`,
        `<p>Your responses suggest that you are experiencing a high level of stress. You feel overwhelmed, like things are out of control. And, this level of stress is affecting your general well-being.</p>`
      ]
    ],
    "scoringMode"   : 0,
    "image"         : 'intro-stress.png',
    "choices"       : [
          [
            {title: 'Never', value: '0', score: 0},
            {title: 'Almost Never', value: '1', score: 1},
            {title: 'Sometimes', value: '2', score: 2},
            {title: 'Fairly often', value: '3', score: 3},
            {title: 'Very often', value: '4', score: 4}
          ],
          [
            {title: 'Never', value: '4', score: 4},
            {title: 'Almost Never', value: '3', score: 3},
            {title: 'Sometimes', value: '2', score: 2},
            {title: 'Fairly often', value: '1', score: 1},
            {title: 'Very often', value: '0', score: 0}
          ]
    ],
    "questions"     : [
      [1,'Been upset because of something that happened unexpectedly?','select',0],
      [2,'Felt that you were unable to control the important things in your life?','select',0],
      [3,'Felt nervous and “stressed”?','select',0],
      [4,'Felt confident about your ability to handle your personal problems?','select',1],
      [5,'Felt that things were going your way?','select',1],
      [6,'Found that you could not cope with all the things that you had to do?','select',0],
      [7,'Been able to control irritations in your life?','select',1],
      [8,'Felt that you were on top of things?','select',1],
      [9,'Been angered because of things that were outside of your control?','select',0],
      [10,'Felt difficulties were piling up so high that you could not overcome them?','select',0]
    ]
  },
  {
    "id"            : 3,
    "title"         : "Panic",
    "questionPrefix": "Think about your last bad anxiety attack:",
    "maxScore"      : 12,
    "midScore"      : 58,
    "minScore"      : 84,
    "scoring"       : [
      [7,0,87,'LOW',
        `<p>Your score is in a range NOT typically associated with the classic symptoms of panic attacks.</p>`,
        `<p>Although only a healthcare professional can provide an actual diagnosis of panic disorder, your results suggest that you are not experiencing the kinds of physical symptoms that usually define a significant problem with panic attacks.</p>`
      ],
      [8,88,118,'MOD',
        `<p>Your score is in a range typically associated with a moderate level of confidence and satisfaction in your role as a parent.</p>`,
        `<p>Your score suggests that for the most part, you believe you handle your role as a parent well but  you also identify some challenges with satisfaction or confidence as a parent.</p><p>Parenting is full of challenges and it is normal to feel unsure or dissatisfied on occasion.  If you would like support or guidance in increasing your confidence as a parent, there are providers who specialize in helping parents develop increased confidence.  If you don’t have a provider, you can locate a provider or clinic near you by clicking on the <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tab in the upper right corner of the website.  If you have more immediate concerns, you can talk with a professional right now by clicking on the <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=2#qt-quick_tab_header'>CALL</a> or <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=1#qt-quick_tab_header'>CHAT</a> tabs, also found in the upper right corner of the website. Both the CALL and CHAT options are available 24-7.</p><p>When someone wishes to grow in their role as a parent, exploring other areas of life can help.  You can do more exploration by taking additional assessments.  We also encourage you to check out AfterDeployment’s "Families with Kids" topic. <p>You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href='https://www.facebook.com/afterdeployment/timeline'>AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
      ],
      [9,119,130,'HIGH',
        `<p>Your score is in a range typically associated with a significant level of physical symptoms associated with Panic Disorder.</p>`,
        `<p>Although only a healthcare professional can provide an actual diagnosis, these symptoms are probably causing you significant distress.</p>`
      ]  
    ],
    "scoringMode"   : 1,
    "image"         : 'intro-panic.png',
    "choices"       : [
          [
            {title: 'Yes', value: '1', score: 1},
            {title: 'No', value: '0', score: 0}
          ],
          [
            {title: 'Yes', value: '15', score: 1},
            {title: 'No', value: '0', score: 0}
          ],
          [
            {title: 'Yes', value: '70', score: 1},
            {title: 'No', value: '0', score: 0}
          ]
    ],
    "questions"     : [
      [1,'In the last 4 weeks, have you had an anxiety attack - suddenly feeling fear or panic?','select',2],
      [2,'Has this ever happened before?','select',1],
      [3,'Do some of these attacks come suddenly out of the blue; that is, in situations where you don\'t expect to be nervous or uncomfortable?','select',1],
      [4,'Do these attacks bother you a lot or are you worried about having another attack?','select',1],
      [5,'Were you short of breath?','select',0],
      [6,'Did your heart race, pound, or skip?','select',0],
      [7,'Did you have chest pain or pressure?','select',0],
      [8,'Did you sweat?','select',0],
      [9,'Did you feel as if you were choking?','select',0],
      [10,'Did you have hot flashes or chills?','select',0],
      [11,'Did you have nausea or an upset stomach, or the feeling that you were going to have diarrhea?','select',0],
      [12,'Did you feel dizzy, unsteady, or faint?','select',0],
      [13,'Did you have tingling or numbness in parts of your body?','select',0],
      [14,'Did you tremble or shake?','select',0],
      [15,'Were you afraid you were dying?','select',0]
    ],
    "callbacks" : [
      "calcPanicQuestions"
    ]
  },
  {
    "id"            : 4,
    "title"         : "Depression",
    "questionPrefix": "Over the last two weeks, how often have you been bothered by any of the following problems?",
    "maxScore"      : 15,
    "midScore"      : 49,
    "minScore"      : 75,
    "scoring"       : [
      [10,0,4,'LOW',
        `<p>Although only a healthcare professional can provide an actual diagnosis, your score is in a range not typically associated with depression or mood problems.</p>`,
       ],
      [11,5,15,'MOD',
        `<p>Although only a healthcare professional can provide an actual diagnosis, your score is in a range typically associated with mild or moderate depression.</p>`,
        `<p>If you are having thoughts of self-harm and think you might act on them, call 911 or the National Suicide Hotline at 800-273-8255.</p>`
      ],
      [12,16,28,'HIGH',
        `<p>Although only a healthcare professional can provide an actual diagnosis, your score is in a range typically associated with severe depression.</p>`,
        `<p>IF YOU ARE CURRENTLY HAVING THOUGHTS OF SELF-HARM CALL 911 OR THE NATIONAL SUICIDE HOTLINE AT 800-273-8255.</p>`
      ]  
    ],
    "scoringMode"   : 0,
    "image"         : 'intro-depression.png',
    "choices"       : [
          [
            {title: 'Not at all', value: '1', score: 0},
            {title: 'Several days', value: '2', score: 1},
            {title: 'More than half the days', value: '3', score: 2},
            {title: 'Nearly every day', value: '4', score: 3}
          ]
    ],
    "questions"     :[
      [1,'How often have you been bothered by having little interest or pleasure in doing things?','select',0],
      [2,'How often have you been bothered by feeling down, depressed or hopeless?','select',0],
      [3,'Trouble falling or staying asleep, or sleeping too much.','select',0],
      [4,'Feeling tired or having little energy.','select',0],
      [5,'Poor appetite or overeating.','select',0],
      [6,'Feeling bad about yourself – or that  you are a failure or have let yourself or your family down.','select',0],
      [7,'Trouble concentrating on things, such as reading the newspaper or watching television.','select',0],
      [8,'Moving or speaking so slowly that other people could have noticed.  Or the opposite – being so fidgety or restless that you have been moving around a lot more than usual.','select',0],
      [9,'Thoughts that you would be better off dead, or of hurting yourself in some way.','select',0]
    ]
  },
  {
    "id"            : 5,
    "title"         : "Anxiety",
    "questionPrefix": "Over the last 2 weeks, how often have you been bothered by the following problems?",
    "maxScore"      : 16,
    "midScore"      : 60,
    "minScore"      : 96,
    "scoring"       : [
      [13,0,5,'LOW',
        `<p>Your score is in a range typically associated with a low level of anxiety indicating that anxiety is probably not affecting your life.</p>`,
        `<p>Although only a healthcare professional can provide an actual diagnosis of an anxiety disorder, your results suggest that you are not experiencing the classic physical or cognitive symptoms associated with anxiety.</p>`
      ],
      [14,6,10,'MOD',
        `Your score is in a range typically associated with moderate levels of the physical and cognitive symptoms of anxiety. Although only a healthcare professional can provide an actual diagnosis, your responses suggest that the symptoms you describe may be associated with the changes that occur in the body in response to anxious concerns.</p>`,
        ],
      [15,11,22,'HIGH',
        `<p>Your score is in a range typically associated with a significant level of physical and cognitive symptoms of anxiety.</p>`,
        `<p>Although only a healthcare professional can provide an actual diagnosis, these symptoms may be causing you significant distress.</p>`
      ]  
    ],
    "scoringMode"   : 1,
    "image"         : 'intro-anxiety.png',
    "choices"       : [
          [
            {title: 'Not at all', value: '1', score: 0},
            {title: 'Several days', value: '2', score: 1},
            {title: 'More than half the days', value: '3', score: 2},
            {title: 'Nearly every day', value: '4', score: 3}
          ]
    ],
    "questions"     : [
      [1,'Feeling nervous, anxious, or on edge','select',0],
      [2,'Not being able to sleep or control worrying.','select',0],
      [3,'Worrying too much about different things.','select',0],
      [4,'Trouble relaxing.','select',0],
      [5,'Being so restless that it is hard to sit still.','select',0],
      [6,'Becoming easily annoyed or irritable.','select',0],
      [7,'Feeling afraid, as if something awful might happen.','select',0]
    ]
  },
  {
    "id"            : 6,
    "title"         : "Resilience",
    "questionPrefix": "The following statements describe how some individuals may think, feel, or act during and after the most stressful events in life. Please indicate how well each of these statements describes you during and after life’s most stressful events. During and after life’s most stressful events, I tend to...",
    "maxScore"      : 12,
    "midScore"      : 58,
    "minScore"      : 84,
    "scoring"       : [
      [16,0,49,'LOW',
        `<p>Your score is in a range that indicates that you are not regularly using many of the resilience skills that are available to help you to cope with life’s stressful events.</p>`,
       ],
      [17,50,70,'MOD',
        `<p>Your score is in a range that indicates that while you use many of the resilience skills available to you, you do not use them as consistently as you could to cope with life’s stressful events.</p>`,
       ],
      [18,71,89,'HIGH',
        `<p>Your score is in a range that indicates that you use many of the skills that have been found to be useful in coping with life’s stressful events.</p>`
      ]  
    ],
    "scoringMode"   : 1,
    "image"         : 'intro-resilience.png',
    "choices"       : [
          [
            {title: 'Exactly Like Me - 4', value: '4', score: 4},
            {title: '3', value: '3', score: 3},
            {title: '2', value: '2', score: 2},
            {title: 'Not At All Like Me - 1', value: '1', score: 1}
          ]
    ],
    "questions"     : [
      [1,'Take action to fix things?','select',0],
      [2,'Not give up trying to solve problems I think I can solve?','select',0],
      [3,'Find a way to do what\'s necessary to carry on?','select',0],
      [4,'Pray or meditate?','select',0],
      [5,'Face my fears?','select',0],
      [6,'Find opportunity for growth?','select',0],
      [7,'Calm and comfort myself?','select',0],
      [8,'Try to recharge myself before I have to face the next challenge?','select',0],
      [9,'See it as a challenge that will make me better?','select',0],
      [10,'Look at the problem in a number of ways?','select',0],
      [11,'Look for creative solutions to the problem?','select',0],
      [12,'Put things in perspective and realize I will have times of joy and times of sadness?','select',0],
      [13,'Be good at determining which situations are changeable and which are not?','select',0],
      [14,'Find meaning from the experience?','select',0],
      [15,'Find strength in the meaning, purpose, or mission of my life?','select',0],
      [16,'Know I will bounce back?','select',0],
      [17,'Expect that I can handle it?','select',0],
      [18,'Learn important and useful life lessons?','select',0],
      [19,'Understand that bad things can happen to anyone, not just me?','select',0],
      [20,'Lean on my faith in God or a higher power?','select',0],
      [21,'Draw upon lessons learned from failures and past mistakes?','select',0],
      [22,'Practice ways to handle it better next time?','select',0]
    ]
  },
  {
    "id"            : 7,
    "title"         : "Alcohol & Drugs",
    "questionPrefix": "In your lifetime, which of the following substances have you ever used? (NON-MEDICAL USE ONLY)",
    "maxScore"      : 0,
    "midScore"      : 22,
    "minScore"      : 38,
    "scoring"       : [
      [19,0,14,'LOW',
       `<p>Your score is in a range typically associated with no or low alcohol or drug use. </p> <p>Although only a healthcare professional can diagnose a substance abuse problem, your results suggest that your health may not be at risk from alcohol or drug use.</p>`,
       `<p>Your results suggest you are managing this area of your life. Because maintaining healthy habits means a lifestyle that includes stress management and finding balance, we encourage you to check out the many tools in the “Life Stress” topic. </p> <p> It's important to emphasize that the abuse of any drug – whether prescribed, over-the-counter, or illegal substances – can lead to health, legal, and relationship problems.</p>  <p>You're also encouraged to check out other assessments on AfterDeployment to learn if you are having problems in other areas.  You can find links to these tools under the RESOURCES tab located above. </p> <p> You may find it helpful to join the <a href='https://www.facebook.com/afterdeployment/timeline'>AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
      ],
      [20,15,29,'MOD',
        `<p>Your score is in a range typically associated with <u>moderate</u> alcohol use.</p> <p>Although only a healthcare professional can diagnose a substance abuse problem, your results suggest that your health may not be at risk from alcohol or drug use.</p>`,
        `<p>After a stressful experience, some people turn to drinking to mask painful feelings. But drinking neither solves problems nor fixes painful emotions. In fact, just the opposite is true.  Drinking is much more likely to <u>worsen</u> rather than improve your level of stress.  Out-of-control drinking can often be accompanied by depression, life stress, and even post-traumatic stress, the reaction that many people experience after a major trauma. One easy way to determine if you're having problems in other areas is to take additional assessments.</p><p>We also encourage you to check out the materials in AfterDeployment's "Alcohol and drugs" topic.</p><p>You may benefit from discussing your alcohol use with a health care provider.  You can <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tab a provider or a clinic near you by clicking on the <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tab tab in the upper right corner of the website. We suggest that you share the results of this assessment with your provider. If you have more immediate concerns, you can talk with a professional right now by clicking on the <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=2#qt-quick_tab_header'>CALL</a> or <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=1#qt-quick_tab_header'>CHAT</a> tabs, also found in the upper right corner of the website.  Both the CALL and CHAT options are available 24/7.  For your convenience, you can find links to the all of the tools that were mentioned here through the RESOURCES tab <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tabd above. </p><p> You may find it helpful to join the <a href='https://www.facebook.com/afterdeployment/timeline'>AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>` 
      ],
      [21,30,40,'HIGH',
        `<p>Your score is in a range typically associated with <u>high</u> levels of alcohol use.</p> <p>Although only a healthcare professional can diagnose a substance abuse problem, your responses are consistent with someone who has become dependent on alcohol, indicating that you're at high risk for severe problems, including health, social, financial, legal, and relationship difficulties.</p>`,
        `<p>After a stressful experience, some people turn to drinking to mask painful feelings. But drinking neither solves problems nor fixes painful emotions. In fact, just the opposite: drinking is much more likely to worsen your stress.   Because your level of use suggests that you have become dependent on alcohol, you should not attempt to quit or decrease your alcohol use on your own.  Suddenly discontinuing heavy alcohol use can be dangerous.  Because you're reporting significant alcohol use, we recommend that you seek face-to-face care with a professional.  A medical or mental health provider can evaluate the extent of the problem and develop a plan. Take a copy of your assessment results with you. You can <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tab a provider or a clinic near you by clicking on the <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tab tab in the upper right corner of the main page. If you have more immediate concerns, you can talk with a professional right now by clicking on the <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=2#qt-quick_tab_header'>CALL</a> or <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=1#qt-quick_tab_header'>CHAT</a> tabs, also found in the upper right corner of the main page. Both the CALL and CHAT options are available 24/7.</p>  <p>Out-of-control drinking can be accompanied by depression, life stress, and even post-traumatic stress, the reaction that many people experience after a major trauma. A good way to determine if you're having problems in these other areas is to take additional assessments. We also suggest that you complete the alcohol and drug assessment again in three months and compare your assessment results with today's results.</p>  <p>We encourage you to check out the materials in AfterDeployment's "Alcohol and Drugs" topic. However, we want to emphasize that your responses  indicate that your best plan is to consult with a health care provider. AfterDeployment is not a substitute for consulting with a provider in person.</p> <p>You can find links to these tools under the RESOURCES tab <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tabd above.</p><p> You may find it helpful to join the <a href='https://www.facebook.com/afterdeployment/timeline'>AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
      ]  
    ],
    "scoringMode"   : 1,
    "image"         : 'intro-alcohol.jpg',
    "choices"       : [
          [
            {title: 'No', value: '1', score: 0},
            {title: 'Yes', value: '2', score: 1}
          ],
          [
            {title: 'No, Never', value: '1', score: 0},
            {title: 'Yes, in the past 3 months', value: '2', score: 6},
            {title: 'Yes, but not in the past 3 months', value: '3', score: 3}
          ],
          [
            {title: 'Never', value: '1', score: 0},
            {title: 'Once or Twice', value: '2', score: 3},
            {title: 'Monthly', value: '3', score: 4},
            {title: 'Weekly', value: '4', score: 5},
            {title: 'Daily or almost daily', value: '5', score: 6}
          ],
          [
            {title: 'Never', value: '1', score: 0},
            {title: 'Once or Twice', value: '2', score: 5},
            {title: 'Monthly', value: '3', score: 6},
            {title: 'Weekly', value: '4', score: 7},
            {title: 'Daily or almost daily', value: '5', score: 8},
          ],
          [
            {title: 'No, Never', value: '1', score: 0},
            {title: 'Yes, in the past 3 months', value: '2', score: 6},
            {title: 'Yes, but not in the past 3 months', value: '3', score: 3}
          ]
    ],
    "questions"     : [
      [1,'In your lifetime, which of the following substances have you ever used? (NON-MEDICAL USE ONLY)','label',0],
      [2,'Alcohol (beer, wine, spirits, etc.)','select',0],
      [3,'Cannabis (marijuana, pot, grass, hash, etc.)','select',0],
      [4,'Cocaine (coke, crack, etc.)','select',0],
      [5,'Amphetamine type stimulants (speed, diet pills, ecstasy, etc.)','select',0],
      [6,'Sedatives or sleeping pills (Valium, Serapax, Rohypnol, Ambien, etc.)','select',0],
      [7,'In the past three months, how often have you used each of the following substances? (NON-MEDICAL USE ONLY)','label',1],
      [8,'During the past three months, how often have you had a strong desire or urge to use [substance]?','select',2],
      [9,'During the past three months, how often has your use of [substance] led to health, social, legal, or financial problems?','select',1],
      [10,'During the past three months, how often have you failed to do what was normally expected of you because of your use of [substance]?','select',3],
      [11,'Has a friend or anyone else ever expressed concern because of your use of [substance]?','select',4],
      [12,'Have your ever tried and failed to control, cut down or stop using [substance]?','select',4]
    ]
  },  
  {
    "id"            : 8,
    "title"         : "Posttraumatic Stress",
    "questionPrefix": "",
    "maxScore"      : 100,
    "midScore"      : 43,
    "minScore"      : 0,
    "scoring"       : [
      [22,44,100,'HIGH',
        `<p>Although only a healthcare professional can provide an actual diagnosis, your score indicates that you are experiencing a significant number of symptoms that are similar to those associated with post-traumatic stress.</p>`,
        `<p>Having experiences that are very similar to those associated with post-traumatic stress suggests that you should look into these concerns because they can be very upsetting and disruptive of your life.   If you’ve experienced these symptoms for more than a few weeks, or they are getting worse, you should consult your health care provider immediately.  If you don’t have one, you can locate a provider or a clinic near you by clicking on the <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tab in the upper right corner of the main page. We recommend you take a copy of the results of this assessment and share them during your appointment.</p><p>If you have more immediate concerns, you can talk with a professional right now by clicking on the <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=2#qt-quick_tab_header'>CALL</a> or <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=1#qt-quick_tab_header'>CHAT</a> tabs, also found in the upper right corner of the main page.  Both the CALL and CHAT options are available 24-7.</p><p>We encourage you to check out the materials in AfterDeployment’s “Post-Traumatic Stress” topic. Also, when someone is experiencing the kinds of distressing symptoms you report, problems are often present in other areas of life.  You can determine where other problems may exist or the extent of the problem by taking additional assessments. </p><p>You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href="https://www.facebook.com/afterdeployment/timeline">AfterDeployment Facebook</a> page where you can network with others on a range of topics.</p>`
      ],
      [23,34,43,'MODERATE',
        `<p>Although only a healthcare professional can provide an actual diagnosis, you are reporting some experiences which are similar to some moderate symptoms  associated with Post-traumatic stress.</p>`,
        `<p>Having experiences that are somewhat similar to those associated with post-traumatic stress doesn’t mean you have post-traumatic stress disorder (PTSD).  It does mean that you should look into the concerns you are reporting because they can be upsetting and distressing.  If you’ve experienced these symptoms for more than a few weeks, or they are getting worse, you should consult your health care provider.  If you don’t have one, you can locate a provider or a clinic near you by clicking on the <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tab in the upper right corner of the website.   If you have more immediate concerns, you can talk with a professional right now by clicking on the <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=2#qt-quick_tab_header'>CALL</a> or <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=1#qt-quick_tab_header'>CHAT</a> tabs, also found in the upper right corner of the website. Both the CALL and CHAT options are available 24-7.</p><p>Another way to explore these experiences is to check out the materials in AfterDeployment’s “Post-Traumatic Stress” topic. When someone is experiencing the kinds of distressing symptoms you report, problems are often present in other areas of life. You can determine where other problems may exist or the extent of the problem by taking additional assessments.  </p><p>You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href="https://www.facebook.com/afterdeployment/timeline">AfterDeployment Facebook</a> page where you can network with others on a range of topics.</p>`
      ],
      [24,0,33,'LOW',
        `<p>Your score reflects that you are not experiencing symptoms that are typically associated with post-traumatic stress.</p><p>Although only a healthcare professional can provide an actual diagnosis of post-traumatic stress, or its absence, your results suggest that your experience is not similar to the experience of individuals suffering from post-traumatic stress.</p>`,
        `<p>Your results suggest you are managing this area of your life.  Because maintaining healthy habits means a lifestyle that includes stress management and finding balance, we encourage you to check out the many tools in the “Life Stress” program.</p><p>You may find it helpful to join the <a href="https://www.facebook.com/afterdeployment/timeline">AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p><p>You’re also encouraged to check out other assessments on AfterDeployment as they can be helpful for learning more about whether or not you are having problems in other areas.  For your convenience, you can find links to the tools that were mentioned here through the RESOURCES tab located above.</p>`
      ]
    ],
    "scoringMode"   : 0,
    "image"         : 'intro-pts.png',
    "choices"       : [
          [
            {title: 'Not at all', value: '1', score: 1},
            {title: 'A little bit', value: '2', score: 2},
            {title: 'Moderately', value: '3', score: 3},
            {title: 'Quite a bit', value: '4', score: 4},
            {title: 'Extremely', value: '5', score: 5}
          ]
    ],
    "questions"     :[
      [1,'Repeated, disturbing memories, thoughts, or images of a stressful military experience from the past?','select',0],
      [2,'Repeated, disturbing dreams of a stressful military experience from the past?','select','select',0],
      [3,'Suddenly acting or feeling as if a stressful military experience were happening again (as if you were reliving it)? ','select',0],
      [4,'Feeling very upset when something reminded you of a stressful military experience from the past?','select',0],
      [5,'Having physical reactions (e.g., heart pounding, trouble breathing, or sweating) when something reminded you of a stressful military experience from the past? ','select',0],
      [6,'Avoiding thinking about or talking about a stressful military experience from the past or avoid having feelings related to it?','select',0],
      [7,'Avoid activities or situations because they remind you of a stressful military experience from the past?','select',0],
      [8,'Trouble remembering important parts of a stressful military experience from the past?','select',0],
      [9,'Loss of interest in things that you used to enjoy?','select',0],
      [10,'Feeling distant or cut off from other people?','select',0],
      [11,'Feeling emotionally numb or being unable to have loving feelings for those close to you?','select',0],
      [12,'Feeling as if your future will somehow be cut short?','select',0],
      [13,'Trouble falling or staying asleep?','select',0],
      [14,'Feeling irritable or having angry outbursts?','select',0],
      [15,'Having difficulty concentrating?','select',0],
      [16,'Being "super alert" or watchful on guard?','select',0],
      [17,'Feeling jumpy or easily startled?','select',0]
    ]
  }, // everything above this is/should be done
  {
    "id"            : 9,
    "title"         : "MTBI",
    "questionPrefix": "",
    "maxScore"      : 130,
    "midScore"      : 60,
    "minScore"      : 0,
    "scoring"       : [
      [25,115,130,'HIGH',
        `<p>Your score is in a range typically associated with a high level of confidence in your ability to cope with your traumatic brain injury compared to others with a TBI.</p><p>Although only a healthcare professional can provide a completely accurate evaluation, your results suggest that you believe you will be able to positively manage the consequences of  your brain injury.  Self-confidence in this area is often associated with symptom improvement.</p>`,
        `<p>A decrease in self-confidence can be common following an injury like a traumatic brain injury.  It is important to identify where you believe support is lacking or additional support is required and begin to problem-solve around getting what you need .  If you find that your confidence in your ability to cope with the problems created by your brain injury has not gradually improved, it is important to discuss these issues with your family and your health care provider.  If you don’t have a provider, you can locate a provider or clinic near you by clicking on the <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tab in the upper right corner of the website. If you have more immediate concerns, you can talk with a professional right now by clicking on the <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=2#qt-quick_tab_header'>CALL</a> or <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=1#qt-quick_tab_header'>CHAT</a> tabs, also found in the upper right corner of the website. Both the CALL and CHAT options are available 24-7.</p><p>When someone is experiencing the kinds of distressing symptoms you report, problems are often present in other areas of life. You can determine where other problems may exist or the extent of the problem by taking additional assessments.   </p><p>You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href="https://www.facebook.com/afterdeployment/timeline">AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
      ],
      [26,60,114,'MODERATE',
        `<p>Compared to others with  a traumatic brain injury, your score is in a range typically associated with a moderate amount of confidence in your ability to cope with the symptoms associated with your brain injury.</p><p>Although only a healthcare professional can provide a complete evaluation, your responses suggest you may be feeling somewhat uncertain in your ability to get help with or manage the symptoms of your injury.</p>`,
        `<p>A decrease in self-confidence can be common following an injury like a traumatic brain injury.  It is important to identify where you believe support is lacking or additional support is required and begin to problem-solve around getting what you need .  If you find that your confidence in your ability to cope with the problems created by your brain injury has not gradually improved, it is important to discuss these issues with your family and your health care provider.  If you don’t have a provider, you can locate a provider or clinic near you by clicking on the <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tab in the upper right corner of the website. If you have more immediate concerns, you can talk with a professional right now by clicking on the <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=2#qt-quick_tab_header'>CALL</a> or <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=1#qt-quick_tab_header'>CHAT</a> tabs, also found in the upper right corner of the website. Both the CALL and CHAT options are available 24-7.</p><p>When someone is experiencing the kinds of distressing symptoms you report, problems are often present in other areas of life. You can determine where other problems may exist or the extent of the problem by taking additional assessments.  </p><p>You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href="https://www.facebook.com/afterdeployment/timeline">AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
      ],
      [27,0,59,'LOW',
        `<p>Your score is in a range typically associated with a low level of confidence in your ability to cope with and manage many of the symptoms of your brain injury.</p><p>Although only a healthcare professional can provide a complete evaluation,   your concerns over your ability to cope with your injury are significant and may have the potential to interfere with your recovery.</p>`,
        `<p>A decrease in self-confidence can be common following an injury like a traumatic brain injury.  It is important to identify where you believe support is lacking or additional support is required and begin to problem-solve around getting what you need.  If you find that your confidence in your ability to cope with the problems created by your brain injury has not gradually improved, it is important to discuss these issues with your family and your health care provider. If you don’t have a provider, you can locate a provider or a clinic near you by clicking on the <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tab in the upper right corner of the website.   If you have more immediate concerns, you can talk with a professional right now by clicking on the <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=2#qt-quick_tab_header'>CALL</a> or <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=1#qt-quick_tab_header'>CHAT</a> tabs, also found in the upper right corner of the website. Both the CALL and CHAT options are available 24-7.</p><p> Another way to explore these experiences is to check out the materials in AfterDeployment’s “mTBI” topic. When someone is struggling with managing the symptoms of a traumatic brain injury, problems are often present in other areas of life. You can determine where other problems may exist or the extent of the problem by taking additional assessments. </p><p>You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href="https://www.facebook.com/afterdeployment/timeline">AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
      ]
    ],
    "scoringMode"   : 0,
    "image"         : 'intro-mtbi.png',
    "choices"       : [
          [
            {title: 'Never', value: '0', score: 0},
            {title: 'Almost Never', value: '1', score: 1},
            {title: 'Sometimes', value: '2', score: 2},
            {title: 'Fairly often', value: '3', score: 3},
            {title: 'Very often', value: '4', score: 4}
          ]
    ],
    "questions"     :[
      [1,'If I do not have enough time to do everything, I do not worry about it.','select',0],
      [2,'My worries overwhelm me.','select',0]
    ]
  },
  {
    "id"            : 10,
    "title"         : "Anger",
    "questionPrefix": "",
    "maxScore"      : 56,
    "midScore"      : 23,
    "minScore"      : 0,
    "scoring"       : [
      [28,43,56,'HIGH',
        `<p>Your score is in a range typically associated with a significant amount of anger.</p>  <p>Although only a healthcare professional can provide an actual diagnosis, anger may be causing significant problems in your relationships, your work, and your health.</p>`,
        `<p>Anger can be common following a deployment. Anger can also be an appropriate emotion in some circumstances. But anger that persists or that is out of control can be harmful to your physical health, your emotional well-being, and your relationships. Because you’re reporting significant anger problems, we urge you to seek face-to-face care with a healthcare provider. If you don’t have a provider, you can locate a provider or a clinic near you by clicking on the <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tab in the upper right corner of the main page. We recommend you take a copy of the results of this assessment and share them during your appointment.</p><p>If you have more immediate concerns, you can talk with a professional right now by clicking on the <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=2#qt-quick_tab_header'>CALL</a> or <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=1#qt-quick_tab_header'>CHAT</a> tabs, also found in the upper right corner of the main page.  Both the CALL and CHAT options are available 24-7.</p><p>Difficulty controlling anger can be accompanied by depression, life stress, and post-traumatic stress. Anger can cause relationship problems and interfere with job performance. A good way to determine if you’re having problems in these other areas is to take additional assessments. </p> <p>You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href="https://www.facebook.com/afterdeployment/timeline">AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
      ],
      [29,23,42,'MODERATE',
        `<p>Your score is in a range typically associated with a moderate amount of anger.</p>  <p>Although only a healthcare professional can provide an actual diagnosis, your responses suggest you may be feeling angry often or having problems controlling your anger. </p>`,
        `<p>Anger can be common following a deployment. Anger can also be an appropriate emotion in some circumstances. But anger that persists or that is out of control can be harmful to your physical health, your emotional well-being, and your relationships. If your anger is not improving, or is getting harder to manage, you need to get help.  If you don’t have a provider, you can locate a provider or clinic near you by clicking on the <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tab in the upper right corner of the website.  If you have more immediate concerns, you can talk with a professional right now by clicking on the <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=2#qt-quick_tab_header'>CALL</a> or <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=1#qt-quick_tab_header'>CHAT</a> tabs, also found in the upper right corner of the website. Both the CALL and CHAT options are available 24-7. <p>When someone is struggling with controlling anger, problems are often present in other areas of life. You can determine where other problems may exist or the extent of the problem by taking additional assessments. We also encourage you to check out AfterDeployment’s  materials in the "Anger" topic.</p><p>You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href="https://www.facebook.com/afterdeployment/timeline">AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
      ],
      [30,0,22,'LOW',
        `<p>Your score is in a range typically associated with low anger.</p>  <p>Although only a healthcare professional can provide an actual diagnosis, your results suggest that you don’t seem to be having difficulties with anger right now.</p>`,
        `<p>Your results suggest you are managing this area of your life. Because maintaining healthy habits means a lifestyle that includes stress management and finding balance, we encourage you to check out the many tools in the “Life Stress” topic.</p><p>You're also encouraged to check out other assessments on AfterDeployment to learn if you are having problems in other areas.  You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href='https://www.facebook.com/afterdeployment/timeline'>AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
      ]
    ],
    "scoringMode"   : 0,
    "image"         : 'intro-anger.png',
    "choices"       : [
          [
            {title: 'Never', value: '0', score: 0},
            {title: 'Almost Never', value: '1', score: 1},
            {title: 'Sometimes', value: '2', score: 2},
            {title: 'Fairly often', value: '3', score: 3},
            {title: 'Very often', value: '4', score: 4}
          ]
    ],
    "questions"     :[
      [1,'If I do not have enough time to do everything, I do not worry about it.','select',0],
      [2,'My worries overwhelm me.','select',0]
    ]
  },
  {
    "id"            : 11,
    "title"         : "Marital Satisfaction",
    "questionPrefix": "",
    "maxScore"      : 100,
    "midScore"      : 85,
    "minScore"      : 0,
    "scoring"       : [
      [31,100,158,'HIGH',
        `<p>Your score is in a range typically associated with high marital distress.</p><p>Your response indicated that you are experiencing problems with your spouse in a variety of areas leading to a great deal of distress in your marital relationship.</p>`,
        `<p>Having experiences of marital distress suggests that you should look into these concerns because they can be very upsetting and disruptive of your life.  We encourage you to check out the resources in the "Families and Friendships" topic. You will find information and exercises for developing skills and strategies that can help improve your marriage.</p><p>In addition to the materials on AfterDeployment, you may benefit from discussing your marriage with a healthcare provider. You can locate a provider or clinic near you by clicking on the <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tab in the upper right corner of this page. If you have more immediate concerns, you can talk with a professional right now by clicking on the <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=2#qt-quick_tab_header'>CALL</a> or <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=1#qt-quick_tab_header'>CHAT</a> tabs, also found in the upper right corner of this page. Both the CALL and CHAT options are available 24/7.</p><p> We recommend that you retake the Marital Relationships assessment in a month to see how you are doing. If over time you find that problems aren’t improving, consult a professional. AfterDeployment is not a substitute for face to face support.</p><p>Problems may also be present in other areas of life. A good way to determine if you’re having problems in other areas is to take additional assessments.</p><p>For your convenience, you can find links to the tools that were mentioned here through the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href="https://www.facebook.com/afterdeployment/timeline">AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
      ],
      [32,85,99,'MODERATE',
        `<p>Your score is in a range typically associated with some marital distress.</p><p>Your responses suggest that you have some dissatisfaction with your marital relationship based on the presence of conflict or disagreement.</p>`,
        `<p>Having some experiences of marital distress suggests that you should look into these concerns because they can become very upsetting and disruptive of your life if left unresolved.  We encourage you to check out the resources in the "Families and Friendships" topic. You will find information and exercises for developing skills and strategies that can help improve your marriage.</p><p>In addition to the materials on AfterDeployment, you may benefit from discussing your marriage with a healthcare provider. You can locate a provider or clinic near you by clicking on the <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tab in the upper right corner of this page. If you have more immediate concerns, you can talk with a professional right now by clicking on the <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=2#qt-quick_tab_header'>CALL</a> or <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=1#qt-quick_tab_header'>CHAT</a> tabs, also found in the upper right corner of this page. Both the CALL and CHAT options are available 24/7.</p><p> We recommend that you retake the Marital Relationships assessment in a month to see how you are doing. If over time you find that problems aren’t improving, consult a professional. AfterDeployment is not a substitute for face to face support.</p><p>When there are marital difficulties present, problems are often present in other areas of life. A good way to determine if you’re having problems in other areas is to take additional assessments.</p><p>You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href='https://www.facebook.com/afterdeployment/timeline'>AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
      ],
      [33,0,84,'LOW',
        `<p>Your score is in a range typically associated with good marital satisfaction.</p><p>Your responses suggest that you are feeling satisfied with your marriage.</p>`,
        `<p>Your results suggest you are managing this area of your life.  Because maintaining healthy habits means a lifestyle that includes stress management and finding balance, we encourage you to check out the many tools in the “Life Stress” program.</p><p>You’re also encouraged to check out other assessments on AfterDeployment as they can be helpful for learning more about whether or not you are having problems in other areas.  For your convenience, you can find links to the tools that were mentioned here through the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href="https://www.facebook.com/afterdeployment/timeline">AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
      ]
    ],
    "scoringMode"   : 0,
    "image"         : 'intro-marital.png',
    "choices"       : [
          [
            {title: 'Never', value: '0', score: 0},
            {title: 'Almost Never', value: '1', score: 1},
            {title: 'Sometimes', value: '2', score: 2},
            {title: 'Fairly often', value: '3', score: 3},
            {title: 'Very often', value: '4', score: 4}
          ]
    ],
    "questions"     :[
      [1,'If I do not have enough time to do everything, I do not worry about it.','select',0],
      [2,'My worries overwhelm me.','select',0]
    ]
  },
  {
    "id"            : 12,
    "title"         : "Friendship",
    "questionPrefix": "",
    "maxScore"      : 19,
    "midScore"      : 16,
    "minScore"      : 0,
    "scoring"       : [
      [34,19,24,'HIGH',
        `<p>Your score is in a range typically associated with low social support, and suggests that you do not feel socially connected or supported by the people in your life. </p>`,
        `<p>After a stressful experience, some people withdraw from friends and family and from activities. However, caring and encouragement from others can boost health and well-being. People who feel connected are less likely to be depressed and are more likely to live longer.  Because you’re reporting a low level of social support, we encourage you to meet with a health care provider. If you don’t have a provider, you can locate a provider or a clinic near you by clicking on the <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tab in the upper right corner of the main page. We recommend you take a copy of the results of this assessment and share them during your appointment.</p><p>If you have more immediate concerns, you can talk with a professional right now by clicking on the <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=2#qt-quick_tab_header'>CALL</a> or <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=1#qt-quick_tab_header'>CHAT</a> tabs, also found in the upper right corner of the main page.  Both the CALL and CHAT options are available 24-7.</p><p>We encourage you to check out the materials in AfterDeployment’s “Families and Friendships” topic.</p><p>Social isolation can occur alongside problems in relationships, life stress, depression, and post-traumatic stress, the reaction that many people experience after a major trauma. A good way to determine if you’re having problems in these areas is to take additional assessments. We also suggest that you complete the Friendship Scale again in a month to track how you’re doing.</p> <p>You can find links to these tools under the RESOURCES tab located above</p><p> You may find it helpful to join the <a href="https://www.facebook.com/afterdeployment/timeline">AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
      ],
      [35,16,18,'MODERATE',
        `<p>Your score is in a range typically associated with some social support.<p>  <p>Your responses suggest that you have some social support but perhaps not as much as you would like, which may be causing you to feel isolated. </p>`,
        `<p>After a stressful experience, some people withdraw from friends and family and from activities. However, caring and encouragement from others can boost health and well-being. People who feel connected are less likely to be depressed and are more likely to live longer. We encourage you to check out <i>AfterDeployment</i>'s materials in the "Families and Friendships" topic.   In addition to the materials on AfterDeployment, you may benefit from discussing your feelings of isolation with a health care provider. If you don’t have a provider, you can locate a provider or clinic near you by clicking on the <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tab in the upper right corner of the website.  If you have more immediate concerns, you can talk with a professional right now by clicking on the <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=2#qt-quick_tab_header'>CALL</a> or <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=1#qt-quick_tab_header'>CHAT</a> tabs, also found in the upper right corner of the website. Both the CALL and CHAT options are available 24-7.</p>><p>Another way to explore these experiences is to check out the materials in AfterDeployment’s “Families and Friendships” topic.</p> <p>When someone is experiencing these kinds of concerns, problems may be present in other areas of life. You can determine where other problems may exist or the extent of the problem by taking additional assessments.  </p><p>You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href='https://www.facebook.com/afterdeployment/timeline'>AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
      ],
      [36,0,15,'LOW',
        `<p>Your score is in a range reflecting few problems with social connections.</p>  <p>Your responses suggest that you’re socially connected and do not feel isolated from others. </p>`,
        `<p>Your results suggest you are managing this area of your life. Because maintaining healthy habits means a lifestyle that includes stress management and finding balance, we encourage you to check out the many tools in the “Life Stress” topic.</p><p>You're also encouraged to check out other assessments on AfterDeployment to learn if you are having problems in other areas.  You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href='https://www.facebook.com/afterdeployment/timeline'>AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
      ]
    ],
    "scoringMode"   : 0,
    "image"         : 'intro-friendship.png',
    "choices"       : [
          [
            {title: 'Never', value: '0', score: 0},
            {title: 'Almost Never', value: '1', score: 1},
            {title: 'Sometimes', value: '2', score: 2},
            {title: 'Fairly often', value: '3', score: 3},
            {title: 'Very often', value: '4', score: 4}
          ]
    ],
    "questions"     :[
      [1,'If I do not have enough time to do everything, I do not worry about it.','select',0],
      [2,'My worries overwhelm me.','select',0]
    ]
  },
  {
    "id"            : 13,
    "title"         : "Optimism",
    "questionPrefix": "",
    "maxScore"      : 19,
    "midScore"      : 14,
    "minScore"      : 0,
    "scoring"       : [
      [37,19,24,'HIGH',
        `<p>Your score is in a range typically associated with a high degree of optimism.</p><p>Your results suggest that your expectations for the future are very positive.</p>`,
        `<p>Your results suggest you are managing this area of your life. Because maintaining healthy habits means a lifestyle that includes stress management and finding balance, we encourage you to check out the many tools in the “Life Stress” topic.</p><p>You may find it helpful to join the <a href="https://www.facebook.com/afterdeployment/timeline">AfterDeployment Facebook</a> page where you can network with others on a range of topics.  </p><p>You're also encouraged to check out other assessments on AfterDeployment to learn if you are having problems in other areas.  You can find links to these tools under the RESOURCES tab located above.</p>`
      ],
      [38,14,18,'MODERATE',
        `<p>Your score is in a range typically associated with a moderate level of Optimism.</p><p>You describe yourself as someone who is generally optimistic about life, but with some reservations.</p>`,
        `<p>Your score suggests that you somewhat positive about the future, but not completely.  Research suggests that maintaining a realistically optimistic perspective leads to an increase in health and well-being over time and is protective against physical illness and emotional struggles.  Realistic optimism also increases the development and maintenance of healthy relationships which are an important part of building resilience.  Realistic optimism is not the same thing as being naïve or being in denial.  It recognizes that in looking at the world there are frequently a wide range of possible meanings associated with a particular event, all of which have a reasonable chance of describing reality.  Optimists tend to select the meaning that describes positive outcomes and contribute to their own well-being.</p><p>If you’d like to enhance your sense of optimism, try surrounding yourself with positive people, like those who tend to volunteer with service organizations.  If you find that you have become less optimistic lately, you might consider meeting with a cognitive therapist who can help you evaluate and change how you interpret events. If you don’t have a provider, you can locate a provider or clinic near you by clicking on the <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tab in the upper right corner of the website.  If you have more immediate concerns, you can talk with a professional right now by clicking on the <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=2#qt-quick_tab_header'>CALL</a> or <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=1#qt-quick_tab_header'>CHAT</a> tabs, also found in the upper right corner of the website. Both the CALL and CHAT options are available 24-7.</p><p>When someone wishes to increase their optimism, exploring other areas of life can help.  You can do more exploration  by taking additional assessments.  We also encourage you to check out AfterDeployment’s "Resilience" topic. </p><p>You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href='https://www.facebook.com/afterdeployment/timeline'>AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
      ],
      [39,0,13,'LOW',
        `<p>Your score is in a range typically associated with a low level of Optimism.</p><p>You describe yourself as someone who finds it difficult to believe that positive things are likely to occur in the future.</p>`,
        `<p>Your score suggests that you tend to expect negative outcomes when you are confronted with uncertainty.   Given any event that could hold either positive or negative meaning, you are likely to choose the negative interpretation.   This is a habit that can be broken.  Research suggests that the act of regularly interpreting events in a positive light leads to an increase in health and well-being over time and is protective against depression.  An optimistic perspective also increases the development and maintenance of healthy relationships which are an important part of building resilience.   Realistic optimism is not the same thing as being naïve or being in denial.  It recognizes that in looking at the world there are frequently a wide range of possible meanings associated with a particular event, all of which have a reasonable chance of describing reality.  Optimists tend to select the meaning that describes positive outcomes and contribute to their own well-being.</p><p>If you find that your tendency to expect the worst and to regularly give negative meaning to events is interfering with your ability to enjoy life or try new things,  you may benefit by meeting with a cognitive therapist. A therapist can help you recognize and change negative interpretation of events. you can locate a provider or a clinic near you by clicking on the <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tab in the upper right corner of the main page. We recommend you take a copy of the results of this assessment and share them during your appointment.</p><p>If you have more immediate concerns, you can talk with a professional right now by clicking on the <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=2#qt-quick_tab_header'>CALL</a> or <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=1#qt-quick_tab_header'>CHAT</a> tabs, also found in the upper right corner of the main page.  Both the CALL and CHAT options are available 24-7.</p><p>When someone wishes to increase their realistic optimism, exploring other areas of life can help.  You can do more exploration  by taking additional assessments.  We also encourage you to check out AfterDeployment’s "Resilience" topic.  </p><p>You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href='https://www.facebook.com/afterdeployment/timeline'>AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
      ]
    ],
    "scoringMode"   : 0,
    "image"         : 'intro-optimism.png',
    "choices"       : [
          [
            {title: 'Never', value: '0', score: 0},
            {title: 'Almost Never', value: '1', score: 1},
            {title: 'Sometimes', value: '2', score: 2},
            {title: 'Fairly often', value: '3', score: 3},
            {title: 'Very often', value: '4', score: 4}
          ]
    ],
    "questions"     :[
      [1,'If I do not have enough time to do everything, I do not worry about it.','select',0],
      [2,'My worries overwhelm me.','select',0]
    ]
  },
  {
    "id"            : 14,
    "title"         : "Parenting Confidence",
    "questionPrefix": "",
    "maxScore"      : 96,
    "midScore"      : 51,
    "minScore"      : 0,
    "scoring"       : [
      [40,70,96,'HIGH',
        `<p>Your score is in a range indicating that you very confident and satisfied with how you are handling your role as a parent.</p>`,
        `<p>Because maintaining healthy habits means a lifestyle that includes many stress management tools to help find balance, we encourage you to check out the many tools in the “Life Stress” program.</p><p>You're also encouraged to check out other assessments on AfterDeployment to learn if you are having problems in other areas.  You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href='https://www.facebook.com/afterdeployment/timeline'>AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
      ],
      [41,51,69,'MODERATE',
        `<p>Your score is in a range typically associated with a moderate level of confidence and satisfaction in your role as a parent.</p>`,
        `<p>Your score suggests that for the most part, you believe you handle your role as a parent well but  you also identify some challenges with satisfaction or confidence as a parent.</p><p>Parenting is full of challenges and it is normal to feel unsure or dissatisfied on occasion.  If you would like support or guidance in increasing your confidence as a parent, there are providers who specialize in helping parents develop increased confidence.  If you don’t have a provider, you can locate a provider or clinic near you by clicking on the <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tab in the upper right corner of the website.  If you have more immediate concerns, you can talk with a professional right now by clicking on the <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=2#qt-quick_tab_header'>CALL</a> or <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=1#qt-quick_tab_header'>CHAT</a> tabs, also found in the upper right corner of the website. Both the CALL and CHAT options are available 24-7.</p><p>When someone wishes to grow in their role as a parent, exploring other areas of life can help.  You can do more exploration by taking additional assessments.  We also encourage you to check out AfterDeployment’s "Families with Kids" topic. <p>You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href='https://www.facebook.com/afterdeployment/timeline'>AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
      ],
      [42,0,50,'LOW',
        `<p>Your score is in a range typically associated with a significant lack of confidence and satisfaction in your role as a parent.  You describe yourself as someone who is experiencing conflict in this role.</p>`,
        `<p>There are many reasons that can contribute to feeling a lack of confidence or satisfaction as a parent.   You may feel like you have little support  or it may be that you have particularly challenging kids.   Many parents struggle with handling the demands of parenting, but it is possible to develop increased confidence and satisfaction by consulting with experts in the field.  If you would like personal support in developing more confidence you can speak with a professional who can provide guidance in this area.  You can locate a provider or clinic near you by clicking on the <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tab in the upper right corner of this page.  If you have other personal concerns, you can talk with a professional right now by clicking on the <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=2#qt-quick_tab_header'>CALL</a> or <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=1#qt-quick_tab_header'>CHAT</a> tabs, also found in the upper right corner of this page. Both the CALL and CHAT options are available 24-7.</p><p>When someone wishes to grow in their role as a parent, exploring other areas of life can help.  You can do more exploration by taking additional assessments. We also encourage you to check out AfterDeployment’s Families with Kids materials. You can find links to the tools that were mentioned here through the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href='https://www.facebook.com/afterdeployment/timeline'>AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
      ]
    ],
    "scoringMode"   : 0,
    "image"         : 'intro-parenting.png',
    "choices"       : [
          [
            {title: 'Never', value: '0', score: 0},
            {title: 'Almost Never', value: '1', score: 1},
            {title: 'Sometimes', value: '2', score: 2},
            {title: 'Fairly often', value: '3', score: 3},
            {title: 'Very often', value: '4', score: 4}
          ]
    ],
    "questions"     :[
      [1,'If I do not have enough time to do everything, I do not worry about it.','select',0],
      [2,'My worries overwhelm me.','select',0]
    ]
  },
  {
    "id"            : 15,
    "title"         : "Percieved Social Support",
    "questionPrefix": "",
    "maxScore"      : 84,
    "midScore"      : 49,
    "minScore"      : 0,
    "scoring"       : [
      [85,69,84,'HIGH',
        `<p>Your score is in a range typically associated with high levels of social support.</p>  <p>Your responses suggest that you have support and help from family and friends.  You have people there when you need them. </p>`,
        `<p>Your results suggest you are managing this area of your life. Because maintaining healthy habits means a lifestyle that includes stress management and finding balance, we encourage you to check out the many tools in the “Life Stress” topic.</p><p>You're also encouraged to check out other assessments on AfterDeployment to learn if you are having problems in other areas.  You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href='https://www.facebook.com/afterdeployment/timeline'>AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
      ],
      [86,49,68,'MODERATE',
        `<p>Your score is in a range typically associated with a moderate level of social support.</p>  <p>Your responses indicate that you have people in your life who are there when you need them. However, you may feel that you could use more support from some of the important people in your life. Help and encouragement from others is important to your physical and emotional health and well-being. </p>`,
        `<p>When someone experiences insufficient social support, problems are often present in other areas of life. You can determine where other problems may exist or the extent of the problem by taking additional assessments. We also encourage you to check out the information in the "Families and Friendships" topic to find out more about these problems and what you can do about them. You will find information and activities on how to increase levels of social support.</p><p>You may benefit from discussing your need for increased social support with a counselor or therapist. If you don’t have a provider, you can locate a provider or clinic near you by clicking on the <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tab in the upper right corner of the website.  If you have more immediate concerns, you can talk with a professional right now by clicking on the <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=2#qt-quick_tab_header'>CALL</a> or <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=1#qt-quick_tab_header'>CHAT</a> tabs, also found in the upper right corner of the website. Both the CALL and CHAT options are available 24-7.</p><p>We recommend that you retake this assessment in two to four weeks to track how you are doing.</p><p>You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href='https://www.facebook.com/afterdeployment/timeline'>AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
      ],
      [87,0,48,'LOW',
        `<p>Your score is in a range typically associated with low social support.</p>  <p>Your responses indicate that you are not feeling helped and supported by the important people in your life. You don’t have a lot of people to count on in difficult times. This can leave you feeling overwhelmed. Help and encouragement from others is important to your physical and emotional health and well-being. </p>`,
        `<p>Having experiences such as you have identified suggests that you should look into these concerns and discuss your sense of isolation with a counselor or therapist.  If you don’t have a provider, you can locate a provider or a clinic near you by clicking on the <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tab in the upper right corner of the main page. We recommend you take a copy of the results of this assessment and share them during your appointment.</p><p>If you have more immediate concerns, you can talk with a professional right now by clicking on the <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=2#qt-quick_tab_header'>CALL</a> or <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=1#qt-quick_tab_header'>CHAT</a> tabs, also found in the upper right corner of the main page.  Both the CALL and CHAT options are available 24-7.</p><p>When someone is experiencing the kinds of distressing concerns you report, problems are often present in other areas of life.  You can determine where other problems may exist or the extent of the problem by taking additional assessments.  </p><p>You can find links to these tools under the RESOURCES tab located above.</p><p>We recommend that you take this assessment again in two to four weeks to track how you are doing. We also encourage you to check out AfterDeployment's “Families and Friendships” materials. However, we want to emphasize that your responses on the assessment indicate that your best plan is to consult with a counselor or therapist. AfterDeployment is not a substitute for consulting with a provider in person.</p><p>You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href="https://www.facebook.com/afterdeployment/timeline">AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p><p> You may find it helpful to join the <a href='https://www.facebook.com/afterdeployment/timeline'>AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
      ]
    ],
    "scoringMode"   : 0,
    "image"         : 'intro-perceived-support.png',
    "choices"       : [
          [
            {title: 'Never', value: '0', score: 0},
            {title: 'Almost Never', value: '1', score: 1},
            {title: 'Sometimes', value: '2', score: 2},
            {title: 'Fairly often', value: '3', score: 3},
            {title: 'Very often', value: '4', score: 4}
          ]
    ],
    "questions"     :[
      [1,'If I do not have enough time to do everything, I do not worry about it.','select',0],
      [2,'My worries overwhelm me.','select',0]
    ]
  },
  {
    "id"            : 16,
    "title"         : "Stigma",
    "questionPrefix": "",
    "maxScore"      : 100,
    "midScore"      : 85,
    "minScore"      : 0,
    "scoring"       : [
      [43,33,50,'HIGH',
        `<P>Your results indicate that you are highly uncomfortable with the idea of seeking psychological treatment. </p>`,
        `<p>Discomfort with the idea of seeking psychological treatment for problems in living is not unusual.  Reluctance to meet with a mental health professional however is often the result of a lack of information or misinformation about the treatment process.  Counseling, psychotherapy, and medication management are now based on research and have been shown to be very effective for a wide range of psychological health issues from depression to relationship problems.  Failure to get needed treatment for the effects of stress or other issues can lead to increasing problems with your physical health, your emotional well-being, and your relationships.  If you are experiencing depression, anxiety, or other psychological distress, you need to get help.  Start with your physician or clergy. You can locate a provider or a clinic near you by clicking on the <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tab in the upper right corner of the main page. We recommend you take a copy of the results of this assessment and share them during your appointment.</p><p>If you have more immediate concerns, you can talk with a professional right now by clicking on the <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=2#qt-quick_tab_header'>CALL</a> or <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=1#qt-quick_tab_header'>CHAT</a> tabs, also found in the upper right corner of the main page.  Both the CALL and CHAT options are available 24-7.</p><p>We also encourage you to check out the materials in AfterDeployment’s "Stigma" topic.</p><p>If you are concerned about seeking psychological treatment, you may wish to explore the kinds of problems that may be  present in other areas of life.  You can determine where other problems may exist or the extent of the problem by taking additional assessments. </p><p>You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href='https://www.facebook.com/afterdeployment/timeline'>AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
      ],
      [44,23,32,'MODERATE',
        `<p>Your results indicate that you are somewhat uncomfortable with the idea of seeking psychological treatment.</p>`,
        `<p>Discomfort with the idea of seeking psychological treatment for problems in living is not unusual.  Reluctance to meet with a mental health professional however is often the result of a lack of information or misinformation about the treatment process.  Counseling, psychotherapy, and medication management are now based on research and have been shown to be very effective for a wide range of psychological health issues from depression to relationship problems.  Failure to get needed treatment for the effects of stress or other issues can lead to increasing problems with your physical health, your emotional well-being, and your relationships.  If you are experiencing depression, anxiety, or other psychological distress, you need to get help.  Start with your physician or clergy.</p><p>You can locate a provider or clinic near you by clicking on the <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tab in the upper right corner of the website.  If you have more immediate concerns, you can talk with a professional right now by clicking on the <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=2#qt-quick_tab_header'>CALL</a> or <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=1#qt-quick_tab_header'>CHAT</a> tabs, also found in the upper right corner of the website. Both the CALL and CHAT options are available 24-7.</p><p>We also encourage you to check out AfterDeployment’s "Stigma" topic.</p><p>You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href='https://www.facebook.com/afterdeployment/timeline'>AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
      ],
      [45,0,22,'LOW',
        `<p>Your results indicate that you are comfortable with the idea of seeking psychological treatment. </p>`,
        `<p>Your results suggest you are managing this area of your life. Because maintaining healthy habits means following a lifestyle that includes stress management and finding balance, we encourage you to check out the many tools in the “Life Stress” topic.</p><p>You're also encouraged to check out other assessments on AfterDeployment to learn if you are having problems in some areas.  You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href='https://www.facebook.com/afterdeployment/timeline'>AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
      ]
    ],
    "scoringMode"   : 0,
    "image"         : 'intro-stigma.png',
    "choices"       : [
          [
            {title: 'Never', value: '0', score: 0},
            {title: 'Almost Never', value: '1', score: 1},
            {title: 'Sometimes', value: '2', score: 2},
            {title: 'Fairly often', value: '3', score: 3},
            {title: 'Very often', value: '4', score: 4}
          ]
    ],
    "questions"     :[
      [1,'If I do not have enough time to do everything, I do not worry about it.','select',0],
      [2,'My worries overwhelm me.','select',0]
    ]
  },
  {
    "id"            : 17,
    "title"         : "Work Adjustment",
    "questionPrefix": "",
    "maxScore"      : 40,
    "midScore"      : 25,
    "minScore"      : 0,
    "scoring"       : [
      [46,35,40,'HIGH',
        `<P>Your results indicate that you feel very confident in your ability to manage the challenges and demands of your work environment.</p>`,
        `<p>Your results suggest you are managing this area of your life. Because maintaining healthy habits means following a lifestyle that includes stress management and finding balance, we encourage you to check out the many tools in the “Life Stress” topic.</p><p>You're also encouraged to check out other assessments on AfterDeployment to learn if you are having problems in other areas.  You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href='https://www.facebook.com/afterdeployment/timeline'>AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
      ],
      [47,25,34,'MODERATE',
        `<p>Your results indicate that you are moderately satisfied with your ability to manage the challenges of your work environment.</p>`,
        `<p>One of the key elements associated with satisfaction and happiness on the job is your belief in your ability to manage the challenges presented by your  job and the people you work with.  Your results indicate that you are not completely confidence that you can successfully handle the problems you confront at work.  This may be the result of an unreasonable supervisor, co-worker or something else beyond your control.  You may need to be more assertive or need more job training. Perhaps you simply aren’t happy doing the things required by your job.  It's important to gain a sense of control over your ability to manage the challenges at work.</p> <p>It may help for you to speak with a professional counselor or vocational counselor. You can locate a professional near you by clicking on the <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tab in the upper right corner of the main page. We recommend you take a copy of the results of this assessment and share them during your appointment. You can talk with a professional right now by clicking on the <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=2#qt-quick_tab_header'>CALL</a> or <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=1#qt-quick_tab_header'>CHAT</a> tabs, also found in the upper right corner of the main page.  Both the CALL and CHAT options are available 24-7.</p> <p>When people lack confidence in their ability to solve  problems at work, there are often problems present in other areas of life.  You can find out more about yourself  by taking additional assessments. We also encourage you to check out the materials in AfterDeployment’s "Work Adjustment" topic.</p><p>You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href='https://www.facebook.com/afterdeployment/timeline'>AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
      ],
      [48,0,24,'LOW',
        `<p>Your results indicate that you feel little control over your ability to manage the challenges of your work environment.</p>`,
        `<p>One of the key elements associated with satisfaction and happiness on the job is your belief in your ability to manage the challenges presented by your  job and the people you work with.  Your results indicate that you have very little confidence that you can successfully handle the problems you confront at work.  This may be the result of an unreasonable supervisor, co-worker or something else beyond your control.  You may need to be more assertive or need more job training. Perhaps you simply aren’t happy doing the things required by your job.  It's important to gain a sense of control over your ability to manage the challenges at work.</p> <p>It may help for you to speak with a professional counselor or vocational counselor. You can locate a professional near you by clicking on the <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tab in the upper right corner of the main page. We recommend you take a copy of the results of this assessment and share them during your appointment. You can talk with a professional right now by clicking on the <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=2#qt-quick_tab_header'>CALL</a> or <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=1#qt-quick_tab_header'>CHAT</a> tabs, also found in the upper right corner of the main page.  Both the CALL and CHAT options are available 24-7.</p> <p>When people lack confidence in their ability to solve  problems at work, there are often problems present in other areas of life.  You can find out more about yourself  by taking additional assessments. We also encourage you to check out the materials in AfterDeployment’s "Work Adjustment" topic.</p><p>You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href='https://www.facebook.com/afterdeployment/timeline'>AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
      ]
    ],
    "scoringMode"   : 0,
    "image"         : 'intro-work.png',
    "choices"       : [
          [
            {title: 'Never', value: '0', score: 0},
            {title: 'Almost Never', value: '1', score: 1},
            {title: 'Sometimes', value: '2', score: 2},
            {title: 'Fairly often', value: '3', score: 3},
            {title: 'Very often', value: '4', score: 4}
          ]
    ],
    "questions"     :[
      [1,'If I do not have enough time to do everything, I do not worry about it.','select',0],
      [2,'My worries overwhelm me.','select',0]
    ]
  },
  {
    "id"            : 18,
    "title"         : "Hope",
    "questionPrefix": "",
    "maxScore"      : 32,
    "midScore"      : 17,
    "minScore"      : 0,
    "scoring"       : [
      [49,24,32,'HIGH',
        `<P>Your score is in a range typically associated with a hopeful outlook on life.</p>`,
        `<p>Your responses suggest that you're hopeful and optimistic about your ability to get things done, and can work to achieve your goals with skill and enthusiasm.</p>  Because maintaining healthy habits means following a lifestyle that includes stress management and finding balance, we encourage you to check out the many tools in the “Life Stress” topic.</p><p>You're also encouraged to check out other assessments on AfterDeployment to learn if you are having problems in other areas.  You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href='https://www.facebook.com/afterdeployment/timeline'>AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
      ],
      [50,17,23,'MODERATE',
        `<p>When compared to others, your hopefulness score is below average. </p>  <p>While your responses indicate that you're somewhat hopeful, they also suggest that you’re guardedly optimistic, and that you may be dwelling on earlier goals and not feeling convinced about your ability to face challenges.</p>`,
        `<p>A loss of hopefulness or optimism about the future can be common following a stressful experience. The materials on AfterDeployment may be helpful. You may also find it helpful to discuss your concerns with a healthcare provider.  If you don’t have a provider, you can locate a provider or a clinic near you by clicking on the <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tab in the upper right corner of the main page. We recommend you take a copy of the results of this assessment and share them during your appointment.</p><p>If you have more immediate concerns, you can talk with a professional right now by clicking on the <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=2#qt-quick_tab_header'>CALL</a> or <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=1#qt-quick_tab_header'>CHAT</a> tabs, also found in the upper right corner of the main page.  Both the CALL and CHAT options are available 24-7.</p>When someone is experiencing these kinds of  concerns, problems are often present in other areas of life.  You can determine where other problems may exist or the extent of the problem by taking additional assessments.   </p><p>You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href='https://www.facebook.com/afterdeployment/timeline'>AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
      ],
      [51,0,16,'LOW',
        `<p>When compared to others, your hopefulness score is significantly below average. Your responses indicate that you’re not feeling very optimistic or hopeful, you’re not satisfied with your accomplishments, and you’re not feeling confident about achieving your future goals.</p>`,
        `<p>A loss of hopefulness or optimism about the future can be common following a stressful experience. Optimism can protect you from depression and the negative effects of stress, and contribute to increased happiness and health.  While only a healthcare provider can make an actual diagnosis, a lack of hopefulness or optimism is often related to depression and post-traumatic stress similar to what many people experience after a major trauma. The materials on AfterDeployment may be helpful. We also urge you to discuss your situation with a health care provider.  If you don’t have a provider, you can locate a provider or a clinic near you by clicking on the <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tab in the upper right corner of the main page. We recommend you take a copy of the results of this assessment and share them during your appointment.</p><p>If you have more immediate concerns, you can talk with a professional right now by clicking on the <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=2#qt-quick_tab_header'>CALL</a> or <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=1#qt-quick_tab_header'>CHAT</a> tabs, also found in the upper right corner of the main page.  Both the CALL and CHAT options are available 24-7.</p><p>We encourage you to check out the materials in AfterDeployment’s “Depression” topic. Also, when someone is experiencing the kinds of distressing concerns you report, problems are often present in other areas of life.  You can determine where other problems may exist or the extent of the problem by taking additional assessments.  </p><p>You can find links to these tools under the RESOURCES tab located above.</p> <p>We recommend that you complete this assessment again in two to four weeks to track how you're doing. </p><p> You may find it helpful to join the <a href='https://www.facebook.com/afterdeployment/timeline'>AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
      ]
    ],
    "scoringMode"   : 0,
    "image"         : 'intro-hope.png',
    "choices"       : [
          [
            {title: 'Never', value: '0', score: 0},
            {title: 'Almost Never', value: '1', score: 1},
            {title: 'Sometimes', value: '2', score: 2},
            {title: 'Fairly often', value: '3', score: 3},
            {title: 'Very often', value: '4', score: 4}
          ]
    ],
    "questions"     :[
      [1,'If I do not have enough time to do everything, I do not worry about it.','select',0],
      [2,'My worries overwhelm me.','select',0]
    ]
  },
  {
    "id"            : 19,
    "title"         : "Generosity",
    "questionPrefix": "",
    "maxScore"      : 60,
    "midScore"      : 47,
    "minScore"      : 0,
    "scoring"       : [
      [52,57,60,'HIGH',
        `<p>Your score is in a range typically associated with a high degree of interpersonal generosity. Your results suggest that you regularly give of your attention, emotions, and energy to others on a personal level.</p>`,
        `<p>Your results suggest you are managing this area of your life. Because maintaining healthy habits means following a lifestyle that includes stress management and finding balance, we encourage you to check out the many tools in the “Life Stress” topic.</p><p>You're also encouraged to check out other assessments on AfterDeployment to learn if you are having problems in other areas.  You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href='https://www.facebook.com/afterdeployment/timeline'>AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
      ],
      [53,47,56,'MODERATE',
        `<p>Your score is in a range typically associated with a moderate level of Interpersonal Generosity. You describe yourself as someone who is available for other people, but who tends to hold back somewhat when it comes to extending personal resources to others, completely and unselfishly.</p>`,
        `<p>Your score suggests that you give of yourself to others in terms of your attention, emotions, and energy, but not wholeheartedly.  You tend to hold back to some degree.  This might be because you are cautious or shy, or that you don’t always attend to the needs of others.  Research suggests that the act of giving of yourself to others leads to an increase in health and well-being over time.  It also increases the development and maintenance of healthy relationships which are an important part of building resilience.  If you would like personal support in developing a more reflexive generosity toward others, many spiritual traditions encourage interpersonal generosity.  You can locate a church, synagogue or other spiritual organization near you by clicking on the <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tab in the upper right corner of the website.  If you have more immediate concerns, you can talk with a professional right now by clicking on the <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=2#qt-quick_tab_header'>CALL</a> or <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=1#qt-quick_tab_header'>CHAT</a> tabs, also found in the upper right corner of the website. Both the CALL and CHAT options are available 24-7.</p><p>We  encourage you to check out the materials in AfterDeployment’s "Resilience" topic.</p><p> You may find it helpful to join the <a href='https://www.facebook.com/afterdeployment/timeline'>AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
      ],
      [54,0,46,'LOW',
        `<p>Your score is in a range typically associated with a low level of interpersonal Generosity.  You describe yourself as someone who tends not to be available for other people, and who tends to hold back when it comes to extending personal resources to others, completely and unselfishly.</p>`,
        `<p>Your score suggests that you do not tend to be generous on the interpersonal level.  This might be because you simply don’t have the desire or interest to reach out to others on a personal level, or like many people, you may be shy or find it difficult to get involved with others.  You may show generosity in other ways,by donating money for example.  Research suggests that only interpersonal generosity has a positive affect on the giver’s health and well-being.  It also promotes the development and maintenance of healthy relationships which are an important part of building resilience.  If you would like personal support in developing a more reflexive generosity toward others, many spiritual traditions encourage interpersonal generosity.  You can locate a church, synagogue or other spiritual organization near you by clicking on the <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tab in the upper right corner of the main page. We recommend you take a copy of the results of this assessment and share them during your appointment.</p><p>If you have more immediate concerns, you can talk with a professional right now by clicking on the <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=2#qt-quick_tab_header'>CALL</a> or <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=1#qt-quick_tab_header'>CHAT</a> tabs, also found in the upper right corner of the main page.  Both the CALL and CHAT options are available 24-7.</p> <p>We encourage you to check out the materials in AfterDeployment’s "Resilience" topic. </p><p>You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href='https://www.facebook.com/afterdeployment/timeline'>AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
      ]
    ],
    "scoringMode"   : 0,
    "image"         : 'intro-generosity.png',
    "choices"       : [
          [
            {title: 'Never', value: '0', score: 0},
            {title: 'Almost Never', value: '1', score: 1},
            {title: 'Sometimes', value: '2', score: 2},
            {title: 'Fairly often', value: '3', score: 3},
            {title: 'Very often', value: '4', score: 4}
          ]
    ],
    "questions"     :[
      [1,'If I do not have enough time to do everything, I do not worry about it.','select',0],
      [2,'My worries overwhelm me.','select',0]
    ]
  },
  {
    "id"            : 20,
    "title"         : "Sleep",
    "questionPrefix": "",
    "maxScore"      : 10,
    "midScore"      : 1,
    "minScore"      : 0,
    "scoring"       : [
      [55,3,10,'HIGH',
        `<p>Your score is in a range typically associated with significant sleep problems.</p>  <p>Sleep problems need to be taken seriously as chronic sleep problems are bad for your physical and emotional health, your relationships, and your productivity.</p>`,
        `<p>A variety of physical health problems may be related to sleep difficulty. Sleep problems may be related to problems such as stress, depression, post traumatic stress and substance abuse. Because you are reporting significant sleep problems, we recommend that you seek face-to-face care with a healthcare provider. A medical or mental health provider can evaluate what is going on and help develop a plan to address your sleep problems. If you don’t have a provider, you can locate a provider or a clinic near you by clicking on the <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tab in the upper right corner of the main page. We recommend you take a copy of the results of this assessment and share them during your appointment.</p><p>If you have more immediate concerns, you can talk with a professional right now by clicking on the <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=2#qt-quick_tab_header'>CALL</a> or <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=1#qt-quick_tab_header'>CHAT</a> tabs, also found in the upper right corner of the main page.  Both the CALL and CHAT options are available 24-7.</p><p>We encourage you to check out the materials in AfterDeployment’s “Sleep” topic. Also, when someone is experiencing the kinds of sleep concerns you report, problems are often present in other areas of life.  You can determine where other problems may exist or the extent of the problem by taking additional assessments.  </p><p>You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href="https://www.facebook.com/afterdeployment/timeline">AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
      ],
      [56,1,2,'MODERATE',
        `<p>Your responses suggest that you are having some difficulty with sleeping and that your sleep is not as good as you’d like. </p>  <p>You report having one or two sleep problems and depending on how severe these problems are, you may be having significant difficulties with your functioning. Sleep problems need to be taken seriously. Good sleep patterns are important for your health, mood, and productivity. </p>`,
        `<p>We encourage you to check out the resources in the Sleep program on AfterDeployment to find out more about these problems and what you can do about them. You will find information and activities on how to manage issues with sleep and develop healthy sleep patterns. And, we would recommend that you retake this sleep assessment in 2-4 weeks to track how you are doing. We want to emphasize that while this website is here to provide information and support, AfterDeployment is not a substitute for consulting with a health care provider in person.  If you don’t have a provider, you can locate a provider or a clinic near you by clicking on the <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tab in the upper right corner on the main page.  If you have more immediate concerns, you can talk with a professional right now by clicking on the <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=2#qt-quick_tab_header'>CALL</a> or <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=1#qt-quick_tab_header'>CHAT</a> tabs, also found in the upper right corner on the main page. Both the CALL and CHAT options are available 24-7.</p><p>Another way to explore these experiences is to check out the materials in AfterDeployment’s “Sleep” topic. When someone is struggling with difficulty sleeping, problems are often present in other areas of life. You can determine where other problems may exist or the extent of the problem by taking additional assessments.  </p><p>You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href='https://www.facebook.com/afterdeployment/timeline'>AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
      ],
      [57,0,0,'LOW',
        `<p>Your responses suggest that you are not having problems with your sleep. Good sleep patterns are important for your health, mood, and productivity. </p>`,
        `<p>Your results suggest you are managing this area of your life. Because maintaining healthy habits means a lifestyle that includes stress management and finding balance, we encourage you to check out the many tools in the “Life Stress” topic.</p><p>You may find it helpful to join the <a href="https://www.facebook.com/afterdeployment/timeline">AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p><p>You're also encouraged to check out other assessments on AfterDeployment to learn if you are having problems in other areas.  You can find links to these tools under the RESOURCES tab located above.</p>`
      ]
    ],
    "scoringMode"   : 0,
    "image"         : 'intro-sleep.png',
    "choices"       : [
          [
            {title: 'Never', value: '0', score: 0},
            {title: 'Almost Never', value: '1', score: 1},
            {title: 'Sometimes', value: '2', score: 2},
            {title: 'Fairly often', value: '3', score: 3},
            {title: 'Very often', value: '4', score: 4}
          ]
    ],
    "questions"     :[
      [1,'If I do not have enough time to do everything, I do not worry about it.','select',0],
      [2,'My worries overwhelm me.','select',0]
    ]
  },
  {
    "id"            : 21,
    "title"         : "Caregiver Stress",
    "questionPrefix": "",
    "maxScore"      : 6,
    "midScore"      : 3,
    "minScore"      : 1,
    "scoring"       : [
      [58,5,6,'HIGH',
        `<p>Your score is in a range typically associated with high caregiver stress.</p>  <p>Based on your results, you’re experiencing a high level of distress in your role as a caregiver, which may be taking an emotional and physical toll. </p>`,
        `<p>There are many things in the life of a caregiver that can lead to feeling stressed. High stress can cause a variety of health problems, such as sleep difficulties, headaches, and gastrointestinal problems. Caring for others is best accomplished by those who also make time for themselves. Consider whether you need to have some relief from your role as a caregiver. If you’re feeling resentment because you can’t seem to ask others for help, or because you believe that you must do everything yourself, talk with a healthcare professional. If you don’t have a provider, you can locate a provider or a clinic near you by clicking on the <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tab in the upper right corner on the main page.  If you have more immediate concerns, you can talk with a professional right now by clicking on the <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=2#qt-quick_tab_header'>CALL</a> or <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=1#qt-quick_tab_header'>CHAT</a> tabs, also found in the upper right corner on the main page. Both the CALL and CHAT options are available 24-7.</p><p>Another way to explore these experiences is to check out the materials in AfterDeployment’s “Life Stress” topic. The stress of being a caregiver can be accompanied by problems in other areas of life. You can determine where other problems may exist or the extent of the problem by taking additional assessments..</p> <p>You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href='https://www.facebook.com/afterdeployment/timeline'>AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
      ],
      [59,3,4,'MODERATE',
        `<p>Your score is in a range typically associated with moderate stress.</p>  <p>Based on your responses, you’re experiencing some stress in your role as a caregiver right now, and may be feeling somewhat overwhelmed by current demands. </p>`,
        `<p>There are many things in the life of a caregiver that can lead to feeling stressed. Caring for others is best accomplished by those who also make time for themselves. Consider whether you need to have some relief from your role as a caregiver. If you’re feeling resentment because you can’t seem to ask others for help, or because you believe that you must do everything yourself, talk with a healthcare professional. If you don’t have a provider, you can locate a provider or a clinic near you by clicking on the <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tab in the upper right corner on the main page.  If you have more immediate concerns, you can talk with a professional right now by clicking on the <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=2#qt-quick_tab_header'>CALL</a> or <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=1#qt-quick_tab_header'>CHAT</a> tabs, also found in the upper right corner on the main page. Both the CALL and CHAT options are available 24-7.</p><p>Another way to explore these experiences is to check out the materials in AfterDeployment’s “Life Stress” topic. The stress of being a caregiver can be accompanied by problems in other areas of life. You can determine where other problems may exist or the extent of the problem by taking additional assessments. </p><p>You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href='https://www.facebook.com/afterdeployment/timeline'>AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
      ],
      [60,1,2,'LOW',
        `<p>Your score is in a range typically associated with low caregiver stress.</p>  <p>Your responses suggest that you’re taking care of yourself and dealing well with the stress of care giving. </p>`,
        `<p>Even though you're not reporting caregiver stress, maintaining healthy habits means a lifestyle that includes stress management and finding balance. You may find helpful tools in the “Life Stress” and "Health and Wellness" topics.</p><p>You're also encouraged to check out other assessments on AfterDeployment to learn if you are having problems in other areas.  You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href='https://www.facebook.com/afterdeployment/timeline'>AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
      ]
    ],
    "scoringMode"   : 0,
    "image"         : 'intro-caregiver.png',
    "choices"       : [
          [
            {title: 'Never', value: '0', score: 0},
            {title: 'Almost Never', value: '1', score: 1},
            {title: 'Sometimes', value: '2', score: 2},
            {title: 'Fairly often', value: '3', score: 3},
            {title: 'Very often', value: '4', score: 4}
          ]
    ],
    "questions"     :[
      [1,'If I do not have enough time to do everything, I do not worry about it.','select',0],
      [2,'My worries overwhelm me.','select',0]
    ]
  },
  {
    "id"            : 22,
    "title"         : "Forgiveness",
    "questionPrefix": "",
    "maxScore"      : 126,
    "midScore"      : 55,
    "minScore"      : 0,
    "scoring"       : [
      [61,90,126,'HIGH',
        `<p>Your score is in a range typically associated with a strong tendency to forgive others, yourself, and negative circumstances, events, or situations that are beyond anyone’s control.</p><p>Your results suggest that you tend to transform your responses to transgression,hurt, betrayal or disappointment from negative and potentially toxic, to neutral or even positive responses.</p>`,
        `<p>Your results suggest you are managing this area of your life. Because maintaining healthy habits means a lifestyle that includes stress management and finding balance, we encourage you to check out the many tools in the “Life Stress” topic.</p><p>You're also encouraged to check out other assessments on AfterDeployment to learn if you are having problems in other areas.  You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href='https://www.facebook.com/afterdeployment/timeline'>AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
      ],
      [62,55,89,'MODERATE',
        `<p>Your score is in a range typically associated with a moderate tendency to forgive yourself, others, and negative circumstances, events, or situations that are beyond anyone’s control.</p><p>You tend to be about equally as likely to forgive as not to forgive yourself, others or negative, uncontrollable  circumstances or  events like illness or natural catastrophes.</p>`,
        `<p>Your score suggests that you may find it easier to forgive in some situations or at some times than in others.  This might be because you have a basic desire to forgive, but like many people, find it difficult to do at certain times or under some circumstances.  Research suggests that holding on to negative feelings over the long run can have a negative effect on health and well-being.  It also interferes with developing and maintaining healthy relationships which are an important part of building resilience.    If you find that you are holding grudges, resentment or anger directed at yourself, someone else, or a circumstance that doesn’t seem fair, you may benefit by talking with an advisor associated with your spiritual tradition or with a therapist.   You can locate a provider, church, or synagogue near you by clicking on the <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tab in the upper right corner of the main page.  If you have more immediate concerns, you can talk with a professional right now by clicking on the <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=2#qt-quick_tab_header'>CALL</a> or <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=1#qt-quick_tab_header'>CHAT</a> tabs, also found in the upper right corner on the main page. Both the CALL and CHAT options are available 24-7.</p><p>When someone is learning to be more forgiving, exploring other areas of life can help.  You can do more exploration  by taking additional assessments. We also encourage you to check out AfterDeployment’s Resilience materials.  </p><p>You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href='https://www.facebook.com/afterdeployment/timeline'>AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
      ],
      [63,0,54,'LOW',
        `<p>Your score is in a range typically associated with a tendency to be unforgiving of yourself, others, or negative, uncontrollable  circumstances or  events like illness or natural catastrophes.</p><p>You describe yourself as unforgiving  when you are confronted with situations in life you consider to be unfair, or when you feel you have been hurt by others.  You also find it difficult to forgive yourself for past behaviors.</p>`,
        `<p><p>Your score suggests that you do not tend to be forgiving.  This might be because you have a basic desire to forgive, but like many people, find it difficult to do at certain times or under some circumstances.  Research suggests that holding on to negative feelings over the long run can have a negative effect on health and well-being.  It also interferes with developing and maintaining healthy relationships which are an important part of building resilience.    If you find that you are holding grudges, resentment or anger directed at yourself, someone else, or a circumstance that doesn’t seem fair, you may benefit by talking with an advisor associated with your spiritual tradition or with a therapist.   You can locate a provider, church, or synagogue near you by clicking on the <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tab in the upper right corner of the main page.  If you have more immediate concerns, you can talk with a professional right now by clicking on the <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=2#qt-quick_tab_header'>CALL</a> or <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=1#qt-quick_tab_header'>CHAT</a> tabs, also found in the upper right corner on the main page. Both the CALL and CHAT options are available 24-7.</p><p>When someone is learning to be more forgiving, exploring other areas of life can help.  You can do more exploration  by taking additional assessments. We also encourage you to check out AfterDeployment’s Resilience materials. </p><p>You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href="https://www.facebook.com/afterdeployment/timeline">AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
      ]
    ],
    "scoringMode"   : 0,
    "image"         : 'intro-forgiveness.png',
    "choices"       : [
          [
            {title: 'Never', value: '0', score: 0},
            {title: 'Almost Never', value: '1', score: 1},
            {title: 'Sometimes', value: '2', score: 2},
            {title: 'Fairly often', value: '3', score: 3},
            {title: 'Very often', value: '4', score: 4}
          ]
    ],
    "questions"     :[
      [1,'If I do not have enough time to do everything, I do not worry about it.','select',0],
      [2,'My worries overwhelm me.','select',0]
    ]
  },
  {
    "id"            : 23,
    "title"         : "Gratitude",
    "questionPrefix": "",
    "maxScore"      : 42,
    "midScore"      : 36,
    "minScore"      : 0,
    "scoring"       : [
      [64,41,42,'HIGH',
        `<p>Your score is in a range typically associated with a high degree of gratitude.</p><p>Your results suggest that you have been able to identify a number of people and experiences in life for which you are especially grateful.</p>`,
        `<p>Your results suggest you are managing this area of your life. Because maintaining healthy habits means following a lifestyle that includes stress management and finding balance, we encourage you to check out the many tools in the “Life Stress” topic.</p><p>You're also encouraged to check out other assessments on AfterDeployment to learn if you are having problems in other areas.  You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href='https://www.facebook.com/afterdeployment/timeline'>AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
      ],
      [65,36,40,'MODERATE',
        `<p>Your score is in a range typically associated with a moderate level of Gratitude.</p><p>You describe yourself as someone who is generally thankful for your experiences in life, but with some bit of reservation.</p>`,
        `<p>Your score suggests that you experience gratitude for a number of things in your life, but you have qualified your wholehearted endorsement of all of the gratitude questions.  Research suggests that the act of recognizing and focusing on what you are grateful for leads to an increase in health and well-being over time and is protective against depression.  Gratitude also increases the development and maintenance of healthy relationships which are an important part of building resilience.  Many people find that what were initially thought to be negative events, on reflection, held a lesson  for which they could be grateful.  If you would like personal support in increasing your sense of gratitude to an even higher level, many spiritual traditions encourage gratitude.  You can locate a church, synagogue or other spiritual organization near you by clicking on the <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tab in the upper right corner of the main page. We recommend you take a copy of the results of this assessment and share them during your appointment.</p><p>If you have more immediate concerns, you can talk with a professional right now by clicking on the <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=2#qt-quick_tab_header'>CALL</a> or <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=1#qt-quick_tab_header'>CHAT</a> tabs, also found in the upper right corner of the main page.  Both the CALL and CHAT options are available 24-7.</p><p>When someone wishes to increase their sense of gratitude, exploring other areas of life can help.  You can do more exploration  by taking additional assessments. We also encourage you to check out AfterDeployment’s Resilience materials.  </p><p>You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href='https://www.facebook.com/afterdeployment/timeline'>AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
      ],
      [66,0,35,'LOW',
        `<p>Your score is in a range typically associated with a low level of Gratitude.</p><p>You describe yourself as someone who has a restricted sense of gratitude for the positive elements in life, but may focus instead on life’s hurts and disappointments.</p>`,
        `<p>Your score suggests that while you are thankful for some things in life, you have reservations about wholeheartedly describing yourself as grateful.   This might be because you simply haven’t spent much time thinking about gratitude or perhaps you are holding on to hurts or disappointments from the past.   Research suggests that the act of recognizing and focusing on even small things you are grateful for leads to an increase in health and well-being over time and is protective against depression.  Many people find that what were initially thought to be negative events, on reflection, held a lesson for which they could be grateful.  Gratitude also increases the development and maintenance of healthy relationships which are an important part of building resilience.  If you would like personal support in recognizing things in life for which to be grateful, many spiritual traditions encourage gratitude.  You can locate a church, synagogue or other spiritual organization near you by clicking on the <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tab in the upper right corner of the main page. We recommend you take a copy of the results of this assessment and share them during your appointment.</p><p>If you have more immediate concerns, you can talk with a professional right now by clicking on the <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=2#qt-quick_tab_header'>CALL</a> or <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=1#qt-quick_tab_header'>CHAT</a> tabs, also found in the upper right corner of the main page.  Both the CALL and CHAT options are available 24-7.</p><p>You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href='https://www.facebook.com/afterdeployment/timeline'>AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
      ]
    ],
    "scoringMode"   : 0,
    "image"         : 'intro-gratitude.png',
    "choices"       : [
          [
            {title: 'Never', value: '0', score: 0},
            {title: 'Almost Never', value: '1', score: 1},
            {title: 'Sometimes', value: '2', score: 2},
            {title: 'Fairly often', value: '3', score: 3},
            {title: 'Very often', value: '4', score: 4}
          ]
    ],
    "questions"     :[
      [1,'If I do not have enough time to do everything, I do not worry about it.','select',0],
      [2,'My worries overwhelm me.','select',0]
    ]
  },
  {
    "id"            : 24,
    "title"         : "Nicotine Dependence",
    "questionPrefix": "",
    "maxScore"      : 100,
    "midScore"      : 85,
    "minScore"      : 0,
    "scoring"       : [
      [67,7,10,'HIGH',
        `<p>Based on your reported smoking habits, your results indicate that you are highly dependent on nicotine at this point in time. </p>`,
        `<p>Your reported smoking habits suggest that you have developed a high  degree of dependence on nicotine. This means that you probably  experience discomfort if your smoking habits are disrupted and that it may be very difficult for you to quit.  You may find it especially useful to consult with a medical or psychological health care provider in your efforts to quit smoking. There are many medications and behavioral strategies available to help overcome your nicotine dependence.   You can locate a provider or clinic near you by clicking on the <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tab in the upper right corner on the main page.  If you have more immediate concerns, you can talk with a professional right now by clicking on the <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=2#qt-quick_tab_header'>CALL</a> or <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=1#qt-quick_tab_header'>CHAT</a> tabs, also found in the upper right corner on the main page. Both the CALL and CHAT options are available 24-7.</p><p>Another way to explore your tobacco use is to check out the materials in AfterDeployment’s “Tobacco” topic. When someone is struggling with nicotine dependence, problems are often present in other areas of life. You can determine where other problems may exist or the extent of the problem by taking additional assessments.  Managing these kinds of concerns on your own can be difficult.</p><p>You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href="https://www.facebook.com/afterdeployment/timeline">AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
      ],
      [68,5,6,'MODERATE',
        `<p>Based on your reported smoking habits, your results indicate that you are moderately dependent on nicotine at this point in time. </p>`,
        `<p>Your reported smoking habits suggest that you have developed a moderate degree of dependence on nicotine. This means that you probably experience some degree of discomfort if your smoking habits are disrupted and that it is becoming increasingly difficult for you to quit.  If you would like to find medical or psychological support in your efforts to quit smoking, you can locate a provider or clinic near you by clicking on the <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tab in the upper right corner on the main page.  If you have more immediate concerns, you can talk with a professional right now by clicking on the <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=2#qt-quick_tab_header'>CALL</a> or <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=1#qt-quick_tab_header'>CHAT</a> tabs, also found in the upper right corner on the main page. Both the CALL and CHAT options are available 24-7.</p><p>Another way to explore your tobacco use is to check out the materials in AfterDeployment’s “Tobacco” topic. When someone is struggling with nicotine dependence, problems are often present in other areas of life. You can determine where other problems may exist or the extent of the problem by taking additional assessments.   </p><p>You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href="https://www.facebook.com/afterdeployment/timeline">AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
      ],
      [69,0,4,'LOW',
        `<p>Based on your reported smoking habits, your results indicate that you are not very dependent on nicotine at this point in time.</p>`,
        `<p>Your results suggest you are managing this area of your life. Because maintaining healthy habits means a lifestyle that includes stress management and finding balance, we encourage you to check out the many tools in the “Life Stress” topic.</p><p>You may find it helpful to join the <a href="https://www.facebook.com/afterdeployment/timeline">AfterDeployment Facebook</a> page where you can network with others on a range of topics.  </p><p>You're also encouraged to check out other assessments on AfterDeployment to learn if you are having problems in other areas.  You can find links to these tools under the RESOURCES tab located above.</p>`
      ]
    ],
    "scoringMode"   : 0,
    "image"         : 'intro-nicotine.png',
    "choices"       : [
          [
            {title: 'Never', value: '0', score: 0},
            {title: 'Almost Never', value: '1', score: 1},
            {title: 'Sometimes', value: '2', score: 2},
            {title: 'Fairly often', value: '3', score: 3},
            {title: 'Very often', value: '4', score: 4}
          ]
    ],
    "questions"     :[
      [1,'If I do not have enough time to do everything, I do not worry about it.','select',0],
      [2,'My worries overwhelm me.','select',0]
    ]
  },
  {
    "id"            : 25,
    "title"         : "Phyisical Injury Resilience",
    "questionPrefix": "",
    "maxScore"      : 88,
    "midScore"      : 50,
    "minScore"      : 0,
    "scoring"       : [
      [70,71,88,'HIGH',
        `<p>Your results indicate that you are using many of the skills that allow you to be resilient in coping with the stress that comes with being injured.</p>`,
        `<p>Your results suggest you are managing this area of your life. Because maintaining healthy habits means following a lifestyle that includes stress management and finding balance, we encourage you to check out the many tools in the “Life Stress” topic.</p><p>You're also encouraged to check out other assessments on AfterDeployment to learn if you are having problems in other areas.  You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href='https://www.facebook.com/afterdeployment/timeline'>AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
      ],
      [71,50,70,'MODERATE',
        `<p>Your results indicate that you are using many of the skills that allow you to be resilient in the face of the challenges that come with being injured, but there may be additional skills you could develop to become even more resilient.</p>`,
        `<p>The stress of coping with a physical injury can be significant.  You have indicated that you are using several of the skills that can increase personal resilience in the face of an injury.  Your score suggests that there may be more you can do in this area, by adding to your coping strategies or by using them more consistently.</p><p>If you’d like personal help in adding to your coping skills, you can locate a provider or clinic near you by clicking on the <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tab in the upper right corner of the website.  If you have more immediate concerns, you can talk with a professional right now by clicking on the <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=2#qt-quick_tab_header'>CALL</a> or <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=1#qt-quick_tab_header'>CHAT</a> tabs, also found in the upper right corner of the website. Both the CALL and CHAT options are available 24-7.</p><p>When people are coping with the results of a physical injury, there are often problems present in other areas of life.  You can do more exploration by taking additional assessments.  We also encourage you to check out the materials in AfterDeployment’s "Physical Injury" topic.  </p><p>You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href='https://www.facebook.com/afterdeployment/timeline'>AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
      ],
      [72,0,49,'LOW',
        `<p>Your results indicate that you are not using many of the skills that could allow you to be more resilient in the face of the challenges that come with being injured.</p>`,
        `<p>The stress of coping with a physical injury can be significant.  You have indicated that you are not using many of the skills that can increase personal resilience in the face of an injury.  Your score suggests that there is a great deal more you can do in this area, by adding to your coping strategies or by using them more consistently.</p><p>If you’d like personal help in adding to your coping skills, you can locate a provider or a clinic near you by clicking on the <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tab in the upper right corner of the main page. We recommend you take a copy of the results of this assessment and share them during your appointment.</p><p>If you have more immediate concerns, you can talk with a professional right now by clicking on the <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=2#qt-quick_tab_header'>CALL</a> or <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=1#qt-quick_tab_header'>CHAT</a> tabs, also found in the upper right corner of the main page.  Both the CALL and CHAT options are available 24-7.</p><p>When people are coping with the results of a physical injury, there are often problems present in other areas of life.  You can do more exploration by taking additional assessments. We also encourage you to check out the materials in AfterDeployment’s "Physical Injury" topic.  </p><p>You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href='https://www.facebook.com/afterdeployment/timeline'>AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
      ]
    ],
    "scoringMode"   : 0,
    "image"         : 'intro-injury.png',
    "choices"       : [
          [
            {title: 'Never', value: '0', score: 0},
            {title: 'Almost Never', value: '1', score: 1},
            {title: 'Sometimes', value: '2', score: 2},
            {title: 'Fairly often', value: '3', score: 3},
            {title: 'Very often', value: '4', score: 4}
          ]
    ],
    "questions"     :[
      [1,'If I do not have enough time to do everything, I do not worry about it.','select',0],
      [2,'My worries overwhelm me.','select',0]
    ]
  },
  {
    "id"            : 26,
    "title"         : "Post Deployment Social Support",
    "questionPrefix": "",
    "maxScore"      : 75,
    "midScore"      : 59,
    "minScore"      : 0,
    "scoring"       : [
      [73,60,75,'HIGH',
        `<p>Your score is in a range typically associated with low social support following deployment.</p>  <p>Your responses suggest that you are not satisfied with the emotional or practical support that you have received from your family, friends, or community since your return from deployment. </p>`,
        `<p>If you are not currently seeking help, we strongly recommend that you discuss your sense of isolation with a counselor or therapist. Take a copy of your assessment results with you to share the details of your problem. A provider can help target the specific problems you might be having and will help develop a plan to improve your sense of connection to others. You can locate a provider or a clinic near you by clicking on the <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tab in the upper right corner of the main page. We recommend you take a copy of the results of this assessment and share them during your appointment.</p><p>If you have more immediate concerns, you can talk with a professional right now by clicking on the <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=2#qt-quick_tab_header'>CALL</a> or <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=1#qt-quick_tab_header'>CHAT</a> tabs, also found in the upper right corner of the main page.  Both the CALL and CHAT options are available 24-7.</p>  <p>When someone has a problem with social support, problems are often present in other areas of life. You can determine where other problems may exist or the extent of the problem by taking additional assessments.</p>  <p>We also encourage you to check out the materials in AfterDeployment's "Families and Friendships" and "Work Adjustment" topics to find out more about how to deal with difficulties in relationships upon return from deployment. You will find information and strategies to help develop social supports.</p>  <p>Take a look at how comfortable you are with asking for support. You may find that you are giving people the message that you are OK and don't need or want support. It is a common mistake to believe that if you have to ask for support it means that people don’t care. Many people are more than happy to provide help and support if they understand the need. Remember that people can't read your mind.</p><p>You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href='https://www.facebook.com/afterdeployment/timeline'>AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
      ],
      [74,40,59,'MODERATE',
        `<p>Your score is in a range typically associated with moderate social support following deployment.</p>  <p>Your responses suggest that you may not be completely satisfied with the support that you have received from your family, friends, or community since your return from deployment.</p>`,
        `<p>Emotional and practical support from family and community is helpful for service members, making the transition back home much easier. We encourage you to build support and make sure that you have others to turn to when you need them. If you are not finding what you need, you may want to consider looking for other supports in the military, veteran, or civilian community. </p><p>When someone has a problem with social support, problems are often present in other areas of life. You can determine where other problems may exist or the extent of the problem by taking additional assessments. We also encourage you to check out the materials in AfterDeployment's "Families and Friendships" and "Work Adjustment" topics to find out more about how to deal with difficulties in your personal and work relationships upon return from deployment. There, you will find information and strategies to help develop additional social support.</p><p>In addition to the materials on AfterDeployment, you may benefit from discussing social support with a healthcare provider. If you don’t have a provider, you can locate a provider or clinic near you by clicking on the <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tab in the upper right corner of the website.  If you have more immediate concerns, you can talk with a professional right now by clicking on the <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=2#qt-quick_tab_header'>CALL</a> or <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=1#qt-quick_tab_header'>CHAT</a> tabs, also found in the upper right corner of the website. Both the CALL and CHAT options are available 24-7.</p> <p>You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href='https://www.facebook.com/afterdeployment/timeline'>AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
      ],
      [75,0,39,'LOW',
        `<p>Your score is in a range typically associated with high social support following deployment.</p>  <p>Your responses suggest that you are satisfied with the social support that you have experienced following your deployment. </p>`,
        `<p>Your results suggest you are managing this area of your life. Because maintaining healthy habits means following a lifestyle that includes stress management and finding balance, we encourage you to check out the many tools in the “Life Stress” topic.</p><p>You're also encouraged to check out other assessments on AfterDeployment to learn if you are having problems in other areas.  You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href='https://www.facebook.com/afterdeployment/timeline'>AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
      ]
    ],
    "scoringMode"   : 0,
    "image"         : 'intro-pdss.png',
    "choices"       : [
          [
            {title: 'Never', value: '0', score: 0},
            {title: 'Almost Never', value: '1', score: 1},
            {title: 'Sometimes', value: '2', score: 2},
            {title: 'Fairly often', value: '3', score: 3},
            {title: 'Very often', value: '4', score: 4}
          ]
    ],
    "questions"     :[
      [1,'If I do not have enough time to do everything, I do not worry about it.','select',0],
      [2,'My worries overwhelm me.','select',0]
    ]
  },
  {
    "id"            : 27,
    "title"         : "Satisfaction With Life",
    "questionPrefix": "",
    "maxScore"      : 35,
    "midScore"      : 18,
    "minScore"      : 0,
    "scoring"       : [
      [76,30,35,'HIGH',
        `<p>Your results indicate that you are feeling very satisfied with how your life is going at the present time.</p>`,
        `<p>Your results suggest you are managing this area of your life. Because maintaining healthy habits means following a lifestyle that includes stress management and finding balance, we encourage you to check out the many tools in the “Life Stress” topic.</p><p>You're also encouraged to check out other assessments on AfterDeployment to learn if you are having problems in other areas.  You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href='https://www.facebook.com/afterdeployment/timeline'>AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
      ],
      [77,18,29,'MODERATE',
        `<p>Your results indicate that you are moderately satisfied with your overall quality of life and are close to the average of others who have completed this scale.</p>`,
        `<p>Satisfaction with life can be based on many factors, including your physical health, work, relationships, and emotional health.  If you are aware of specific areas of your life that interfere with the direction you’d like your life to go, it’s important to develop a plan that allows you to develop a sense of control in those areas.  You may wish to lose weight, stop smoking or drinking, improve your eating habits, improve your relationships or look for more satisfying work.  Your low level of life satisfaction suggests you might benefit by seeking help in any of these areas that are interfering with your ability to enjoy life.  If you don’t have a provider, you can locate a provider or a clinic near you by clicking on the <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tab in the upper right corner of the main page. We recommend you take a copy of the results of this assessment and share them during your appointment.</p><p>If you have more immediate concerns, you can talk with a professional right now by clicking on the <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=2#qt-quick_tab_header'>CALL</a> or <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=1#qt-quick_tab_header'>CHAT</a> tabs, also found in the upper right corner of the main page.  Both the CALL and CHAT options are available 24-7.</p><p>We encourage you to check out the materials in AfterDeployment’s “Health and Wellness” topic. Also, when someone is experiencing  concerns with how their life is progressing, problems are often present in many other areas.  You can determine where other problems may exist or the extent of the problem by taking additional assessments.  </p><p>You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href='https://www.facebook.com/afterdeployment/timeline'>AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
      ],
      [78,0,17,'LOW',
        `<p>Your results indicate that you experience a low level of satisfaction with your life and are significantly below average in your ratings of how satisfied you are with your life compared to others who have completed this scale. </p>`,
        `<p>Satisfaction with life can be based on many factors, including your physical health, work, relationships, and emotional health.  If you are aware of specific areas of your life that interfere with the direction you’d like your life to go, it’s important to develop a plan that allows you to develop a sense of control in those areas.  You may wish to lose weight, stop smoking or drinking, improve your eating habits, improve your relationships or look for more satisfying work.  Your low level of life satisfaction suggests you might benefit by seeking help in any of these areas that are interfering with your ability to enjoy life.  If you don’t have a provider, you can locate a provider or a clinic near you by clicking on the <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tab in the upper right corner of the main page. We recommend you take a copy of the results of this assessment and share them during your appointment.</p><p>If you have more immediate concerns, you can talk with a professional right now by clicking on the <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=2#qt-quick_tab_header'>CALL</a> or <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=1#qt-quick_tab_header'>CHAT</a> tabs, also found in the upper right corner of the main page.  Both the CALL and CHAT options are available 24-7.</p><p>We encourage you to check out the materials in AfterDeployment’s “Health and Wellness” topic. Also, when someone is experiencing  concerns with how their life is progressing, problems are often present in many other areas.  You can determine where other problems may exist or the extent of the problem by taking additional assessments.  </p><p>You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href='https://www.facebook.com/afterdeployment/timeline'>AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
      ]
    ],
    "scoringMode"   : 0,
    "image"         : 'intro-satisfaction.png',
    "choices"       : [
          [
            {title: 'Never', value: '0', score: 0},
            {title: 'Almost Never', value: '1', score: 1},
            {title: 'Sometimes', value: '2', score: 2},
            {title: 'Fairly often', value: '3', score: 3},
            {title: 'Very often', value: '4', score: 4}
          ]
    ],
    "questions"     :[
      [1,'If I do not have enough time to do everything, I do not worry about it.','select',0],
      [2,'My worries overwhelm me.','select',0]
    ]
  },
  {
    "id"            : 28,
    "title"         : "Sexual Trauma",
    "questionPrefix": "",
    "maxScore"      : 85,
    "midScore"      : 24,
    "minScore"      : 0,
    "scoring"       : [
      [79,44,85,'HIGH',
        `<p>Although only a healthcare professional can provide an actual diagnosis,  your score indicates that you are experiencing a significant number of symptoms that are similar to those associated with post-traumatic stress which may be related to a traumatic sexual experience.</p>`,
        `<p>The experiences you are describing should be addressed immediately by meeting with a professional with experience in this area, if you are not already doing so. Having experiences that are very similar to those associated with post-traumatic stress suggests that you should look into these concerns because they can be very upsetting and disruptive of your life. If you do not have a professional resource you can access, it’s important to locate someone who can help.</p>               <p> You can talk with a professional right now by clicking on the <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=2#qt-quick_tab_header'>CALL</a> or <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=1#qt-quick_tab_header'>CHAT</a> tabs found in the upper right corner of the main page.  Both the CALL and CHAT options are available 24-7. You can locate a provider or a clinic near you by clicking on the <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tab, also in the upper right corner of the main page. We recommend you take a copy of the results of this assessment and share them during your appointment. Additional resources that can be accessed immediately can be found on the RESOURCES tab located above.<p/>       <p>We encourage you to check out the materials in AfterDeployment’s “Military Sexual Trauma" and "Post-Traumatic Stress” topics. Also, when someone is experiencing the kinds of distressing concerns you report, problems are often present in other areas of life.  You can determine where other problems may exist or the extent of the problem by taking additional assessments. </p><p>You can find links to all of these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href='https://www.facebook.com/afterdeployment/timeline'>AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
      ],
      [80,34,43,'MODERATE',
        `<p>Although only a healthcare professional can provide an actual diagnosis, you are reporting some experiences which are similar to symptoms associated with moderate post-traumatic stress, which may be associated with a traumatic sexual experience.</p>`,
        `<p>Having experiences that are somewhat similar to those associated with post-traumatic stress doesn’t mean you have post-traumatic stress disorder (PTSD).  It does mean that you should look into the concerns you are reporting because they can be upsetting and distressing.  If you’re experiencing significant upset or distress and you are not  in direct contact with support, you should consult your health care provider or a crisis clinic as soon as you can.  If you don’t have a provider, you can locate a provider or a clinic near you by clicking on the <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tab in the upper right corner on the main page.  If you have more immediate concerns, you can talk with a professional right now by clicking on the <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=2#qt-quick_tab_header'>CALL</a> or <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=1#qt-quick_tab_header'>CHAT</a> tabs, also found in the upper right corner on the main page. Both the CALL and CHAT options are available 24-7.</p><p>You can find specific resources for personal support in AfterDeployment’s “Military Sexual Trauma" and "Post-Traumatic Stress” topics. When someone is experiencing the kinds of distressing symptoms you report, problems are often present in other areas of life. You can determine where other problems may exist or the extent of the problem by taking additional assessments. </p><p>You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href='https://www.facebook.com/afterdeployment/timeline'>AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
      ],
      [81,0,33,'LOW',
        `<p>Your score suggests that you are not experiencing symptoms that are typically associated with post-traumatic stress as a result of sexual trauma.</p><p>Although only a healthcare professional can provide an actual diagnosis of post-traumatic stress, or its absence, your results suggest that your experience is not similar to the experience of individuals suffering from post-traumatic stress.</p>`,
        `<p>Your results suggest you are managing this area of your life. However, you may still find the material in the "Military Sexual Trauma" and "Life Stress" topics on AfterDeployment helpful. </p><p>You may find it helpful to join the <a href="https://www.facebook.com/afterdeployment/timeline">AfterDeployment Facebook</a> page where you can network with others on a range of topics.  </p><p>You're also encouraged to check out other assessments on AfterDeployment to learn if you are having problems in other areas.  You can find links to these tools under the RESOURCES tab located above.</p>`
      ]
    ],
    "scoringMode"   : 0,
    "image"         : 'intro-sexual.png',
    "choices"       : [
          [
            {title: 'Never', value: '0', score: 0},
            {title: 'Almost Never', value: '1', score: 1},
            {title: 'Sometimes', value: '2', score: 2},
            {title: 'Fairly often', value: '3', score: 3},
            {title: 'Very often', value: '4', score: 4}
          ]
    ],
    "questions"     :[
      [1,'If I do not have enough time to do everything, I do not worry about it.','select',0],
      [2,'My worries overwhelm me.','select',0]
    ]
  },
  {
    "id"            : 29,
    "title"         : "Spirituality",
    "questionPrefix": "",
    "maxScore"      : 5,
    "midScore"      : 2,
    "minScore"      : 0,
    "scoring"       : [
      [82,4,5,'HIGH',
        `<P>Your score is in a range typically associated with a significant degree of spiritual struggle.  You describe yourself as someone who is experiencing significant spiritual conflict in response to stressful experiences. </p>`,
        `<p>Your score suggests that you are feeling a high level of tension based on doubts about beliefs  about your spirituality which may have previously helped you to cope with difficulties in life.   This might be because you have experienced significant trauma and have been unable to reconcile that experience with your beliefs.  Many people find themselves questioning long held beliefs in response to trauma, illness, or disappointments.  However,   research suggests that high levels of spiritual struggle, even in the short term, can lead to a great deal of distress, significantly impacting health and well-being.  The longer the tension remains unresolved, the greater the likelihood of serious physical and emotional problems.  Because of the potential impact of your current level of spiritual struggle on your health and well-being, we strongly suggest that you work to resolve the tension you are experiencing.   If you would like personal support in examining your spiritual beliefs and disappointments, many spiritual traditions encourage this type of exploration.    In addition to its protective effects on health and well-being, many people find that the process of resolving spiritual struggle leads to personal and spiritual growth. You can locate a church, synagogue or other spiritual organization near you by clicking on the <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tab in the upper right corner of the main page.   If you have other personal concerns, you can talk with a professional right now by clicking on the <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=2#qt-quick_tab_header'>CALL</a> or <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=1#qt-quick_tab_header'>CHAT</a> tabs, also found in the upper right corner of the main page. Both the CALL and CHAT options are available 24-7.</p> <p>When someone wishes to explore their spiritual understanding, exploring other areas of life can help.  You can do more exploration by taking additional assessments. We also encourage you to check out AfterDeployment's "Spirituality" topic. </p>  <p>You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href='https://www.facebook.com/afterdeployment/timeline'>AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
      ],
      [83,2,3,'MODERATE',
        `<p>Your score is in a range typically associated with a moderate level of spiritual struggle.</p>  <p>You describe yourself as someone who is experiencing  a moderate degree of spiritual struggle in response to the stress in your life. </p>`,
        `<p>Your score suggests that for the most part, you believe you can count on your spiritual beliefs for support during difficult times.  However, you have qualified your confidence in your ability to rely completely on the meaning you find in spirituality.  It is not at all uncommon for trauma, distress, or disappointment to create doubts about some aspects of one’s spiritual beliefs.    If the resulting spiritual struggle is temporary it is likely to have little effect on either your well-being or resilience.  However, even moderate amounts of unresolved, chronic spiritual tension, in the form of anger, resentment or a sense of abandonment, significantly increase the likelihood of physical and emotional problems.   If you would like personal support in examining your spiritual beliefs and disappointments, many spiritual traditions encourage this type of exploration.  In addition to its protective effects on health and well-being, many people find that the process of resolving spiritual struggle leads to personal and spiritual growth.   You can locate a church, synagogue or other spiritual organization near you by clicking on the <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tab in the upper right corner of the main page.  If you have other personal concerns, you can talk with a professional right now by clicking on the <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=2#qt-quick_tab_header'>CALL</a> or <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=1#qt-quick_tab_header'>CHAT</a> tabs, also found in the upper right corner of the main page. Both the CALL and CHAT options are available 24-7.</p> <p>When someone wishes to explore their spiritual understanding, exploring other areas of life can help.  You can do more exploration by taking additional assessments. We also encourage you to check out AfterDeployment's "Spirituality" topic. </p>  <p>You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href='https://www.facebook.com/afterdeployment/timeline'>AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
      ],
      [84,0,1,'LOW',
        `<p>Your score is in a range indicating that you are experiencing very little to no spiritual struggle at this time.</p>  <p>Your results suggest that you are comfortable with how your belief system is supporting your ability to manage the stress that comes with the significant challenges and changes in your life.</p>`,
        `<p>Your results suggest you are managing this area of your life. Because maintaining healthy habits means a lifestyle that includes stress management and finding balance, we encourage you to check out the many tools in the “Life Stress” topic.</p><p>You're also encouraged to check out other assessments on AfterDeployment to learn if you are having problems in other areas.  You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href='https://www.facebook.com/afterdeployment/timeline'>AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
      ]
    ],
    "scoringMode"   : 0,
    "image"         : 'intro-spirituality.png',
    "choices"       : [
          [
            {title: 'Never', value: '0', score: 0},
            {title: 'Almost Never', value: '1', score: 1},
            {title: 'Sometimes', value: '2', score: 2},
            {title: 'Fairly often', value: '3', score: 3},
            {title: 'Very often', value: '4', score: 4}
          ]
    ],
    "questions"     :[
      [1,'If I do not have enough time to do everything, I do not worry about it.','select',0],
      [2,'My worries overwhelm me.','select',0]
    ]
  }
];