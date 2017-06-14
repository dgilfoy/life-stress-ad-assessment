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
    "image"         : require('../images/intro-worry.png'),
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
    "image"         : require('../images/intro-stress.png'),
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
    "image"         : require('../images/intro-panic.png'),
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
    "image"         : require('../images/intro-depression.png'),
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
    "image"         : require('../images/intro-anxiety.png'),
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
    "image"         : require('../images/intro-resilience.png'),
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
  }
];