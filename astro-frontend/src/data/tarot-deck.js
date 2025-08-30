// astro-frontend/src/data/tarot-deck.js

// Import all 23 of your images here (22 cards + 1 back)
import cardBack from '../images/tarot/Card_Back.jpg';
import card00 from '../images/tarot/00_TheFool.jpg';
import card01 from '../images/tarot/01_TheMagician.jpg';
import card02 from '../images/tarot/02_TheHighPriestess.jpg';
import card03 from '../images/tarot/03_TheEmpress.jpg';
import card04 from '../images/tarot/04_TheEmperor.jpg';
import card05 from '../images/tarot/05_TheHierophant.jpg';
import card06 from '../images/tarot/06_TheLovers.jpg';
import card07 from '../images/tarot/07_TheChariot.jpg';
import card08 from '../images/tarot/08_TheStrength.jpg';
import card09 from '../images/tarot/09_TheHermit.jpg';
import card10 from '../images/tarot/10_TheWheelOfFortune.jpg';
import card11 from '../images/tarot/11_TheJustice.jpg';
import card12 from '../images/tarot/12_TheHangedMan.jpg';
import card13 from '../images/tarot/13_TheDeath.jpg';
import card14 from '../images/tarot/14_TheTemperance.jpg';
import card15 from '../images/tarot/15_TheDevil.jpg';
import card16 from '../images/tarot/16_TheTower.jpg';
import card17 from '../images/tarot/17_TheStar.jpg';
import card18 from '../images/tarot/18_TheMoon.jpg';
import card19 from '../images/tarot/19_TheSun.jpg';
import card20 from '../images/tarot/20_TheJudgement.jpg';
import card21 from '../images/tarot/21_TheWorld.jpg';

export const cardBackImage = cardBack;

export const majorArcana = [
    {
        id: 0, name: "The Fool", image: card00,
        readings: {
            love: [
                { heading: "New Romance", description: "Be open to a new, spontaneous, and possibly unconventional relationship." },
                { heading: "Leap of Faith", description: "This is a time to trust your heart and take a chance on love, even if it feels risky." },
                { heading: "Innocence", description: "Approach love with a fresh perspective, free from the baggage of past experiences." }
            ],
            career: [
                { heading: "New Opportunity", description: "A new job, project, or business venture is on the horizon; embrace the unknown." },
                { heading: "Unconventional Path", description: "Your career may take an unexpected turn; follow your passion rather than the traditional route." },
                { heading: "Beginner's Mind", description: "Approach your work with curiosity and a willingness to learn from scratch." }
            ],
            personality: [
                { heading: "Free Spirit", description: "You are an individual who values freedom, spontaneity, and living in the moment." },
                { heading: "Optimism", description: "You possess a natural optimism and a belief that the universe will provide for you." },
                { heading: "Risk-Taker", description: "You are not afraid to take risks and embark on new adventures, even without a clear plan." }
            ],
            pastlife: [
                { heading: "A Traveler's Soul", description: "In a past life, you were likely a wanderer, explorer, or someone who never stayed in one place for long." },
                { heading: "The Innocent", description: "You may have lived a life of profound innocence or naivety, perhaps in a sheltered community." },
                { heading: "A Fateful Choice", description: "A significant past-life event involved a major leap of faith that dramatically changed your destiny." }
            ]
        }
    },
    {
        id: 1, name: "The Magician", image: card01,
        readings: {
            love: [
                { heading: "Manifesting Love", description: "You have the power to attract the relationship you desire through clear intention and action." },
                { heading: "Creative Connection", description: "Your relationship thrives on shared creativity, communication, and intellectual stimulation." },
                { heading: "Taking Initiative", description: "This is the time to be proactive in your love life; don't wait for things to happen." }
            ],
            career: [
                { heading: "Resourcefulness", description: "You have all the skills, tools, and resources at your disposal to achieve your goals." },
                { heading: "Skilled Communication", description: "Your ability to communicate effectively will be key to your success and influence." },
                { heading: "Entrepreneurial Spirit", description: "This card often signifies the start of a successful new business or freelance venture." }
            ],
            personality: [
                { heading: "Powerful Creator", description: "You are a natural manifestor, capable of turning your ideas into reality." },
                { heading: "Confident Individual", description: "You possess strong self-confidence and a belief in your own abilities." },
                { heading: "Skilled Communicator", description: "You can articulate your thoughts and ideas with clarity and charisma." }
            ],
            pastlife: [
                { heading: "The Alchemist or Scholar", description: "You were likely an alchemist, scribe, inventor, or someone with specialized, powerful knowledge." },
                { heading: "A Master of a Craft", description: "In a past life, you mastered a specific skill or trade, earning respect and influence." },
                { heading: "A Pivotal Creation", description: "You were responsible for a creation or idea that had a significant impact on your community." }
            ]
        }
    },
    // ... Continue for all 22 cards
    {
        id: 2, name: "The High Priestess", image: card02,
        readings: {
            love: [
                { heading: "Intuitive Connection", description: "Your relationship is based on a deep, unspoken, and almost psychic understanding." },
                { heading: "Hidden Feelings", description: "There may be secrets or feelings that have not yet been brought to the surface." },
                { heading: "Divine Feminine", description: "Embrace your intuitive, receptive, and mysterious side to attract or deepen a connection." }
            ],
            career: [
                { heading: "Trust Your Gut", description: "Your intuition is your best guide in career decisions right now; look beyond the obvious facts." },
                { heading: "Seek Knowledge", description: "A time for study, research, or seeking specialized knowledge that is not widely known." },
                { heading: "Hidden Information", description: "There may be important information about a project or deal that is not yet public." }
            ],
            personality: [
                { heading: "Intuitive and Wise", description: "You possess a deep inner wisdom and a strong connection to your intuition." },
                { heading: "Mysterious Aura", description: "You have a calm, sometimes enigmatic presence, and you don't reveal all your secrets." },
                { heading: "Seeker of Truth", description: "You are drawn to the hidden mysteries of life and the subconscious mind." }
            ],
            pastlife: [
                { heading: "The Oracle or Seer", description: "You were a priestess, oracle, or wise woman who held sacred knowledge and guided others." },
                { heading: "A Keeper of Secrets", description: "Your past life involved being entrusted with important secrets or hidden traditions." },
                { heading: "A Life of Contemplation", description: "You may have lived a solitary life dedicated to study, meditation, and spiritual pursuits." }
            ]
        }
    },
    {
        id: 3, name: "The Empress", image: card03,
        readings: {
            love: [
                { heading: "Nurturing Love", description: "Your relationship is entering a phase of deep nurturing, comfort, and sensual pleasure." },
                { heading: "Abundance and Growth", description: "Love is growing and blossoming around you, leading to a more committed and fertile union." },
                { heading: "Motherhood/Parenthood", description: "This card can signify pregnancy, motherhood, or taking on a nurturing, parental role in the relationship." }
            ],
            career: [
                { heading: "Creative Flourishing", description: "Your creative projects are set to flourish, bringing abundance and recognition." },
                { heading: "A Nurturing Environment", description: "You are thriving in a supportive and collaborative work environment that fosters growth." },
                { heading: "Financial Abundance", description: "This is a time of material reward and growth in your career or business." }
            ],
            personality: [
                { heading: "Nurturing and Creative", description: "You are a natural nurturer, full of creativity, and you find joy in caring for others." },
                { heading: "Connected to Nature", description: "You have a strong connection to the earth, nature, and the cycles of life." },
                { heading: "Abundant Spirit", description: "You have a generous spirit and an ability to create comfort and beauty around you." }
            ],
            pastlife: [
                { heading: "The Matriarch or Queen", description: "You held a position of motherly authority, such as a queen, matriarch of a large family, or landowner." },
                { heading: "A Life of Abundance", description: "You experienced a life of great comfort, creativity, and connection to the natural world." },
                { heading: "The Creator or Artist", description: "Your past life was dedicated to creation, whether through art, farming, or raising a family." }
            ]
        }
    },
    {
        id: 4, name: "The Emperor", image: card04,
        readings: {
            love: [
                { heading: "Stability and Commitment", description: "The relationship is built on a solid foundation of stability, order, and long-term commitment." },
                { heading: "Protective Partner", description: "One partner takes on a protective, provider role, ensuring the safety and structure of the union." },
                { heading: "Traditional Values", description: "Your approach to love is traditional, valuing clear boundaries and defined roles." }
            ],
            career: [
                { heading: "Leadership and Authority", description: "You are in a position of authority and control, or you are about to step into one." },
                { heading: "Structure and Discipline", description: "Success will come through disciplined, strategic planning and creating order from chaos." },
                { heading: "Building an Empire", description: "This is a time for long-term planning and building a solid foundation for your career or business." }
            ],
            personality: [
                { heading: "A Natural Leader", description: "You are a disciplined, authoritative figure who thrives on structure and order." },
                { heading: "Protective Nature", description: "You have a strong desire to protect and provide for those you care about." },
                { heading: "Strategic Thinker", description: "You are a logical and strategic thinker, preferring plans and rules over chaos." }
            ],
            pastlife: [
                { heading: "The Ruler or General", description: "You were a king, general, or powerful leader responsible for maintaining order and law." },
                { heading: "A Builder of Structures", description: "Your past life involved creating lasting structures, either physically (buildings) or socially (laws, dynasties)." },
                { heading: "A Father Figure", description: "You were a patriarch or respected elder who provided stability and guidance for your community." }
            ]
        }
    },
    {
        id: 5, name: "The Hierophant", image: card05,
        readings: {
            love: [
                { heading: "Traditional Union", description: "This card often points towards a conventional commitment, such as marriage or a formal partnership." },
                { heading: "Shared Beliefs", description: "A strong relationship is built on shared values, traditions, and spiritual beliefs." },
                { heading: "Seeking Guidance", description: "You may benefit from seeking advice from a trusted mentor or counselor about your relationship." }
            ],
            career: [
                { heading: "Working Within Institutions", description: "Success is found within established organizations like corporations, schools, or government." },
                { heading: "Mentorship", description: "You are either finding a valuable mentor or becoming one to others in your field." },
                { heading: "Conforming to Rules", description: "Adhering to the established rules and procedures is the best path forward for now." }
            ],
            personality: [
                { heading: "A Traditionalist", description: "You value tradition, established systems, and time-honored wisdom." },
                { heading: "A Lifelong Learner", description: "You are a student of life, always seeking knowledge from trusted sources and institutions." },
                { heading: "A Spiritual Guide", description: "You often find yourself in the role of a teacher or guide, sharing your beliefs with others." }
            ],
            pastlife: [
                { heading: "The Priest or Teacher", description: "You were a spiritual leader, teacher, or guardian of sacred traditions and texts." },
                { heading: "A Member of an Order", description: "Your past life was part of a structured institution, such as a monastery, university, or guild." },
                { heading: "A Keeper of Tradition", description: "You were responsible for passing down important cultural or spiritual traditions to the next generation." }
            ]
        }
    },
    {
        id: 6, name: "The Lovers", image: card06,
        readings: {
            love: [
                { heading: "Soulmate Connection", description: "This card signifies a deep, harmonious, and soul-level connection with a partner." },
                { heading: "A Major Choice", description: "You are facing a significant choice in your love life that will define your future path." },
                { heading: "Alignment of Values", description: "Your relationship is strong because you are in perfect alignment on your core values and beliefs." }
            ],
            career: [
                { heading: "A Harmonious Partnership", description: "A successful business partnership based on mutual respect and shared values is indicated." },
                { heading: "A Values-Based Decision", description: "You must make a career choice that is in alignment with your personal ethics and values." },
                { heading: "Passion Project", description: "This is a sign to follow your heart and choose a career path that you truly love." }
            ],
            personality: [
                { heading: "Relationship-Oriented", description: "You feel most complete when you are in a harmonious and balanced partnership." },
                { heading: "Driven by Values", description: "Your decisions are guided by a strong internal moral compass and personal values." },
                { heading: "A Maker of Choices", description: "You often find yourself at important crossroads, needing to make significant life choices." }
            ],
            pastlife: [
                { heading: "A Fateful Partnership", description: "A significant past life was defined by a powerful and transformative relationship." },
                { heading: "A Life-Altering Choice", description: "You faced a major choice between two paths that had profound consequences for your soul's journey." },
                { heading: "The Peacemaker", description: "You were a diplomat or mediator, skilled at creating harmony and bringing two sides together." }
            ]
        }
    },
    {
        id: 7, name: "The Chariot", image: card07,
        readings: {
            love: [
                { heading: "Taking Control", description: "You are in the driver's seat of your love life; it's time to move forward with determination." },
                { heading: "Overcoming Conflict", description: "Success in your relationship comes from balancing opposing forces and working together." },
                { heading: "A Shared Goal", description: "You and your partner are moving towards a common goal with focus and ambition." }
            ],
            career: [
                { heading: "Victory and Ambition", description: "A major success or promotion is within reach through hard work and determination." },
                { heading: "Maintaining Control", description: "You need to manage competing interests and maintain focus to steer your project to success." },
                { heading: "Travel for Work", description: "This card can often signify work-related travel or a project that is moving forward quickly." }
            ],
            personality: [
                { heading: "Ambitious and Driven", description: "You are a highly motivated and ambitious individual with a strong will to succeed." },
                { heading: "Disciplined", description: "You have the self-control and discipline to overcome challenges and stay on course." },
                { heading: "A Conqueror", description: "You are a natural winner who thrives on challenge and the pursuit of victory." }
            ],
            pastlife: [
                { heading: "The Warrior or Conqueror", description: "You were a soldier, conqueror, or traveler who achieved great victory through willpower." },
                { heading: "A Long Journey", description: "Your past life involved a significant and challenging journey, either physical or metaphorical." },
                { heading: "Triumph Over Adversity", description: "You overcame major obstacles in a past life, a lesson in resilience your soul remembers." }
            ]
        }
    },
    {
        id: 8, name: "Strength", image: card08,
        readings: {
            love: [
                { heading: "Compassionate Control", description: "Your relationship thrives on patience, compassion, and gentle strength, not force." },
                { heading: "Taming Passions", description: "You are learning to master your own impulses and passions for the good of the relationship." },
                { heading: "Quiet Courage", description: "Facing challenges in your relationship with quiet courage and resilience will lead to success." }
            ],
            career: [
                { heading: "Inner Resolve", description: "Your success comes from your inner strength and resilience, not from outward aggression." },
                { heading: "Patience and Persistence", description: "You will achieve your goals through steady, patient effort and refusing to give up." },
                { heading: "Influencing with Kindness", description: "You can influence others and achieve your aims more effectively through compassion than force." }
            ],
            personality: [
                { heading: "Quietly Courageous", description: "Your strength is not loud or boastful; it is a deep well of inner courage and resilience." },
                { heading: "Compassionate", description: "You have a great capacity for compassion and understanding, both for yourself and others." },
                { heading: "Self-Controlled", description: "You have mastered your inner impulses and passions, allowing you to act with grace." }
            ],
            pastlife: [
                { heading: "The Healer or Caretaker", description: "You may have been a healer, a veterinarian, or someone who cared for the vulnerable." },
                { heading: "A Test of Courage", description: "A past life involved a situation that required immense inner strength and moral courage to overcome." },
                { heading: "A Life of Patience", description: "You learned the deep spiritual lesson of patience, perhaps through a long and challenging task." }
            ]
        }
    },
    {
        id: 9, name: "The Hermit", image: card09,
        readings: {
            love: [
                { heading: "A Period of Introspection", description: "You or your partner may need some time alone to reflect on the relationship." },
                { heading: "Seeking Inner Wisdom", description: "The answers you seek about your love life are not outside, but within yourself." },
                { heading: "A Relationship with a Wise Soul", description: "You may be involved with an older, wiser, or more introverted partner." }
            ],
            career: [
                { heading: "Soul-Searching", description: "You are taking time to re-evaluate your career path and find what truly aligns with your soul." },
                { heading: "Seeking Expert Guidance", description: "It is a good time to seek out a mentor or expert who can shine a light on your path." },
                { heading: "Working Independently", description: "You may find you do your best work alone, away from the distractions of a busy office." }
            ],
            personality: [
                { heading: "An Introspective Soul", description: "You are a thoughtful, introspective person who needs time alone to recharge." },
                { heading: "A Seeker of Truth", description: "You are on a quest for knowledge and truth, and you are not satisfied with superficial answers." },
                { heading: "A Wise Guide", description: "Others often seek you out for your wisdom and guidance, which you offer generously." }
            ],
            pastlife: [
                { heading: "The Monk or Sage", description: "You lived a life of solitude and contemplation as a monk, hermit, or wise sage." },
                { heading: "A Keeper of Knowledge", description: "You may have been a librarian, scholar, or lighthouse keeper, guarding knowledge for others." },
                { heading: "A Quest for Enlightenment", description: "Your past life was a dedicated search for spiritual truth and enlightenment." }
            ]
        }
    },
    {
        id: 10, name: "Wheel of Fortune", image: card10,
        readings: {
            love: [
                { heading: "A Turning Point", description: "A significant change or turning point is coming in your love life; fate is at play." },
                { heading: "Cycles of a Relationship", description: "Relationships have their ups and downs; this card signals a change in the current cycle." },
                { heading: "Destiny", description: "This relationship may be a destined one, part of a larger karmic plan for your life." }
            ],
            career: [
                { heading: "A Change in Luck", description: "Your career is at a turning point; expect a change in fortune, often for the better." },
                { heading: "Adapting to Change", description: "You must be willing to adapt to the changing cycles and circumstances in your workplace." },
                { heading: "New Opportunities", description: "The wheel is turning, bringing unexpected opportunities and a new direction." }
            ],
            personality: [
                { heading: "Adaptable", description: "You understand that life is full of ups and downs, and you are skilled at adapting to change." },
                { heading: "A Believer in Destiny", description: "You have a sense that life has a larger plan and that events happen for a reason." },
                { heading: "Philosophical", description: "You tend to see the bigger picture and understand the cyclical nature of life." }
            ],
            pastlife: [
                { heading: "A Life of Shifting Fortunes", description: "You experienced dramatic ups and downs in a past life, from riches to rags or vice versa." },
                { heading: "The Gambler or Merchant", description: "You were someone whose life was tied to cycles of luck, such as a merchant or gambler." },
                { heading: "A Karmic Lesson", description: "Your soul learned a profound lesson about destiny, karma, and the unpredictable nature of fate." }
            ]
        }
    },
    {
        id: 11, name: "Justice", image: card11,
        readings: {
            love: [
                { heading: "Cause and Effect", description: "The state of your relationship is a direct result of past actions; you reap what you sow." },
                { heading: "Clarity and Honesty", description: "Truth and fairness are paramount now. All decisions must be made with honesty." },
                { heading: "Legal Matters", description: "This can indicate legal aspects of a relationship, such as marriage, divorce, or contracts." }
            ],
            career: [
                { heading: "Fair Decision", description: "A fair and balanced decision will be made regarding your career, or you will be the one making it." },
                { heading: "Contracts and Agreements", description: "Pay close attention to the details of any contracts or legal agreements you are signing." },
                { heading: "Accountability", description: "You will be held accountable for your past actions at work, for better or for worse." }
            ],
            personality: [
                { heading: "Fair and Ethical", description: "You are a person of integrity with a strong sense of fairness and a clear moral compass." },
                { heading: "Logical and Objective", description: "You make decisions based on logic and facts, rather than emotion." },
                { heading: "Truth-Seeker", description: "You are committed to finding the truth and ensuring that justice is served." }
            ],
            pastlife: [
                { heading: "The Judge or Lawmaker", description: "You were a judge, lawmaker, or official responsible for upholding the law and making fair decisions." },
                { heading: "A Karmic Balancing", description: "Your past life involved a significant event that was about balancing karmic scales." },
                { heading: "A Life of Integrity", description: "You lived a life guided by strong principles of fairness and truth, earning great respect." }
            ]
        }
    },
    {
        id: 12, name: "The Hanged Man", image: card12,
        readings: {
            love: [
                { heading: "A Necessary Pause", description: "The relationship may be in a period of suspension or pause; use this time for reflection." },
                { heading: "A New Perspective", description: "Look at your relationship from a completely different angle to gain new insights." },
                { heading: "Making a Sacrifice", description: "You or your partner may need to make a sacrifice for the greater good of the relationship." }
            ],
            career: [
                { heading: "Projects on Hold", description: "Your career or a specific project may be stalled; wait for the right moment to act." },
                { heading: "Seeing Things Differently", description: "A new perspective on a work-related problem will reveal the solution." },
                { heading: "Letting Go", description: "You may need to let go of a long-held career goal to make way for something better." }
            ],
            personality: [
                { heading: "A Different Thinker", description: "You see the world from a unique and often unconventional perspective." },
                { heading: "Patient", description: "You understand the value of waiting and allowing things to unfold in their own time." },
                { heading: "Willing to Sacrifice", description: "You are willing to make personal sacrifices for a greater purpose or for spiritual growth." }
            ],
            pastlife: [
                { heading: "The Mystic or Shaman", description: "You were a spiritual initiate who underwent trials to gain a higher perspective." },
                { heading: "A Period of Exile", description: "Your soul experienced a period of waiting or exile, learning the lesson of surrender." },
                { heading: "A Sacrifice for a Cause", description: "In a past life, you made a significant sacrifice for your community or your beliefs." }
            ]
        }
    },
    {
        id: 13, name: "Death", image: card13,
        readings: {
            love: [
                { heading: "A Major Transformation", description: "The relationship is undergoing a profound transformation; an old phase is ending." },
                { heading: "Ending of a Cycle", description: "This can signify the end of a relationship, but also clears the way for a new, better one." },
                { heading: "Letting Go of the Past", description: "You must let go of old patterns and attachments to allow your love life to be reborn." }
            ],
            career: [
                { heading: "An Inevitable Ending", description: "A job, project, or entire career path is coming to an end, making way for something new." },
                { heading: "Radical Change", description: "Prepare for a fundamental and necessary change in your work situation." },
                { heading: "Clearing the Decks", description: "It's time to eliminate what is no longer working in your career to create space for new growth." }
            ],
            personality: [
                { heading: "Transformative", description: "You are a person who undergoes profound personal transformations throughout your life." },
                { heading: "Unafraid of Endings", description: "You understand that endings are a natural part of life and necessary for new beginnings." },
                { heading: "A Catalyst for Change", description: "Your presence often acts as a catalyst for change in the lives of others." }
            ],
            pastlife: [
                { heading: "The Survivor", description: "You survived a major upheaval like a war, plague, or natural disaster, learning about endings." },
                { heading: "A Life of Profound Change", description: "Your past life was marked by constant and dramatic transformations, forcing you to adapt." },
                { heading: "The Agent of Transition", description: "You may have been a surgeon, soldier, or midwife—someone who works at the threshold of life and death." }
            ]
        }
    },
    {
        id: 14, name: "Temperance", image: card14,
        readings: {
            love: [
                { heading: "Balance and Harmony", description: "Your relationship is a beautiful blend of different energies, creating harmony and balance." },
                { heading: "Patience and Moderation", description: "A calm, patient, and moderate approach to your love life will bring the best results." },
                { heading: "A Divine Mix", description: "You and your partner are finding the perfect 'middle path' that works for both of you." }
            ],
            career: [
                { heading: "Finding the Middle Ground", description: "You are successfully blending different ideas or teams to create a harmonious outcome." },
                { heading: "Long-Term Vision", description: "Patience and a clear long-term vision are your keys to success; avoid rushing things." },
                { heading: "Work-Life Balance", description: "This card is a strong indicator of achieving a healthy and sustainable work-life balance." }
            ],
            personality: [
                { heading: "A Balanced Individual", description: "You are a calm, balanced, and patient person who avoids extremes." },
                { heading: "A Natural Mediator", description: "You are skilled at finding common ground and blending opposing viewpoints." },
                { heading: "Purposeful", description: "You have a clear sense of your long-term goals and you work towards them with patience." }
            ],
            pastlife: [
                { heading: "The Alchemist or Healer", description: "You were an alchemist, herbalist, or healer, skilled at blending different ingredients to create a cure." },
                { heading: "A Diplomat", description: "Your past life was spent as a diplomat or ambassador, finding peace and common ground between factions." },
                { heading: "A Life of Moderation", description: "You learned the spiritual lesson of balance and moderation, avoiding the pitfalls of extremism." }
            ]
        }
    },
    {
        id: 15, name: "The Devil", image: card15,
        readings: {
            love: [
                { heading: "Unhealthy Attachment", description: "This can indicate a codependent, obsessive, or restrictive relationship based on fear or materialism." },
                { heading: "Temptation", description: "Be aware of temptations or addictions that may be negatively impacting your love life." },
                { heading: "Breaking Free", description: "Recognize that the chains that bind you are loose; you have the power to break free from this negative pattern." }
            ],
            career: [
                { heading: "Feeling Trapped", description: "You may feel trapped in a job you hate due to financial fears or a 'golden handcuffs' situation." },
                { heading: "Negative Work Environment", description: "Be aware of negative, gossipy, or overly competitive dynamics in the workplace." },
                { heading: "Material Obsession", description: "An excessive focus on money or status at the expense of your well-being is indicated." }
            ],
            personality: [
                { heading: "A Shadow Side", description: "This card represents the part of you that is drawn to temptation, addiction, and material excess." },
                { heading: "Confronting Your Fears", description: "You are being called to confront your deepest fears and the negative patterns that hold you back." },
                { heading: "A Sense of Humor", description: "On a lighter note, you may have a playful, hedonistic side that enjoys life's pleasures." }
            ],
            pastlife: [
                { heading: "A Life of Bondage", description: "Your soul may have experienced a life of addiction, obsession, or literal bondage, and is now learning freedom." },
                { heading: "The Materialist", description: "You may have lived a life overly focused on wealth and power, learning the lesson that it doesn't bring happiness." },
                { heading: "Confronting a Shadow", description: "A past life involved a major confrontation with your own or society's 'dark side'." }
            ]
        }
    },
    {
        id: 16, name: "The Tower", image: card16,
        readings: {
            love: [
                { heading: "Sudden Upheaval", description: "Expect a sudden, shocking, and potentially painful revelation or breakup that will change everything." },
                { heading: "False Foundations", description: "The relationship was built on a false foundation, and this event is tearing it down so you can rebuild on truth." },
                { heading: "A Moment of Truth", description: "A sudden insight or event will reveal the absolute truth of your relationship situation." }
            ],
            career: [
                { heading: "Unexpected Job Loss", description: "This card can signify a sudden job loss, a project failing, or a major corporate shake-up." },
                { heading: "A House of Cards", description: "A career path or business built on a weak foundation is about to come crashing down." },
                { heading: "Liberating Change", description: "While painful, this destruction is necessary to free you from a situation that was not right for you." }
            ],
            personality: [
                { heading: "A Catalyst for Upheaval", description: "You are a person who experiences sudden, life-altering epiphanies and changes." },
                { heading: "A Truth-Teller", description: "You are not afraid to tear down false beliefs and illusions, both in yourself and in others." },
                { heading: "Resilient", description: "You have been through major upheavals and have learned how to rebuild from the ground up." }
            ],
            pastlife: [
                { heading: "A Fall from Power", description: "You experienced a sudden and dramatic fall from a position of power or high status." },
                { heading: "Surviving a Catastrophe", description: "Your soul remembers surviving a major disaster, like the fall of a city or a natural disaster." },
                { heading: "The Revolutionary", description: "You were involved in a revolution or uprising that tore down an old, corrupt system." }
            ]
        }
    },
    {
        id: 17, name: "The Star", image: card17,
        readings: {
            love: [
                { heading: "Hope and Healing", description: "After a difficult time, this card brings hope, healing, and a renewed sense of faith in love." },
                { heading: "A Serene Connection", description: "Your relationship is blessed with peace, serenity, and a feeling of spiritual connection." },
                { heading: "Wish Fulfillment", description: "This is a sign that your deepest wishes for love are on their way to being fulfilled." }
            ],
            career: [
                { heading: "Inspiration and Creativity", description: "You are feeling creatively inspired and hopeful about your career path; your star is on the rise." },
                { heading: "A Time of Calm", description: "After a period of work-related stress, a time of peace, calm, and renewed purpose is here." },
                { heading: "Public Recognition", description: "Your talents are about to be recognized, and you may find yourself in the spotlight." }
            ],
            personality: [
                { heading: "Hopeful and Optimistic", description: "You have an unshakable sense of hope and a belief in a brighter future." },
                { heading: "Inspirational", description: "You have a calm, healing presence that inspires hope and faith in others." },
                { heading: "Generous", description: "You are a generous soul, always willing to give back and pour out your gifts to the world." }
            ],
            pastlife: [
                { heading: "The Astronomer or Healer", description: "You were an astronomer, astrologer, or healer who worked with the healing energies of the cosmos." },
                { heading: "A Period of Renewal", description: "Your soul experienced a life of peace and renewal after a period of great hardship." },
                { heading: "The Visionary", description: "You were an artist or visionary who inspired hope and guided your community towards a better future." }
            ]
        }
    },
    {
        id: 18, name: "The Moon", image: card18,
        readings: {
            love: [
                { heading: "Illusion and Deception", description: "Things may not be as they seem in your relationship; be wary of illusion or deception." },
                { heading: "Deep-Seated Fears", description: "Your fears and anxieties about love are coming to the surface and must be confronted." },
                { heading: "Following Your Intuition", description: "You must navigate this confusing time by relying on your deepest intuition, not your logical mind." }
            ],
            career: [
                { heading: "Uncertainty and Confusion", description: "You are feeling uncertain about your career path; the way forward is not clear at this time." },
                { heading: "Hidden Information", description: "There is hidden information or office politics at play that you are not fully aware of." },
                { heading: "Creative Projects", description: "This is a powerful card for creative work that taps into the subconscious, like writing or art." }
            ],
            personality: [
                { heading: "A Dreamer", description: "You have a rich inner world and a powerful imagination, and are deeply connected to your dreams." },
                { heading: "Highly Intuitive", description: "You are highly psychic or intuitive, often picking up on things that others miss." },
                { heading: "Anxious", description: "You may be prone to anxiety and allowing your fears to get the better of you at times." }
            ],
            pastlife: [
                { heading: "A Life of Illusion", description: "You may have been a magician, an actor, or someone involved in creating illusions for others." },
                { heading: "Navigating the Unknown", description: "Your soul undertook a perilous journey in a past life, learning to trust its intuition to survive." },
                { heading: "The Psychic or Mystic", description: "You lived a life deeply connected to the moon, dreams, and the subconscious realms." }
            ]
        }
    },
    {
        id: 19, name: "The Sun", image: card19,
        readings: {
            love: [
                { heading: "Joy and Vitality", description: "Your relationship is filled with joy, warmth, passion, and vibrant energy." },
                { heading: "Clarity and Truth", description: "All is revealed in the light of day; there is complete honesty and clarity between you." },
                { heading: "Celebrating Together", description: "This is a time for celebration, fun, and simply enjoying the happiness of being together." }
            ],
            career: [
                { heading: "Success and Recognition", description: "You are about to achieve a major success in your career and receive public recognition for your efforts." },
                { heading: "Clarity of Purpose", description: "You have absolute clarity on your career goals and the path to achieving them." },
                { heading: "A Positive Work Environment", description: "You are working in a vibrant, positive, and enthusiastic environment where you can shine." }
            ],
            personality: [
                { heading: "Radiant and Confident", description: "You exude confidence, optimism, and a radiant energy that draws others to you." },
                { heading: "Authentic", description: "You are not afraid to be your true self and let your inner light shine brightly." },
                { heading: "Enthusiastic", description: "You have a zest for life and approach new things with passion and enthusiasm." }
            ],
            pastlife: [
                { heading: "A Golden Age", description: "You experienced a past life during a time of great peace, prosperity, and happiness." },
                { heading: "The Celebrated Artist", description: "You were a celebrated artist, performer, or public figure who was beloved by many." },
                { heading: "A Life of Simple Joys", description: "Your soul learned the profound lesson of finding joy in the simple, beautiful moments of life." }
            ]
        }
    },
    {
        id: 20, name: "Judgement", image: card20,
        readings: {
            love: [
                { heading: "A Relationship Rebirth", description: "This is a time of renewal and rebirth in your relationship, forgiving past mistakes." },
                { heading: "An Awakening", description: "You are having a major awakening about what you truly need and deserve in a partnership." },
                { heading: "A Defining Decision", description: "A final, important decision about the relationship is being made, one with karmic weight." }
            ],
            career: [
                { heading: "A Calling", description: "You are hearing a true calling towards a career that is in alignment with your soul's purpose." },
                { heading: "Final Assessment", description: "A period of assessment or review is coming, where your past work will be judged." },
                { heading: "Absolution", description: "It's a time to forgive yourself for past career mistakes and move forward with a clean slate." }
            ],
            personality: [
                { heading: "Self-Aware", description: "You have reached a high level of self-awareness and are able to judge your own actions clearly." },
                { heading: "Purpose-Driven", description: "You feel a strong sense of a higher purpose or calling that guides your life." },
                { heading: "Reflective", description: "You are a reflective person who often takes stock of your life and makes conscious course-corrections." }
            ],
            pastlife: [
                { heading: "A Moment of Reckoning", description: "A past life was defined by a major event that served as a spiritual wake-up call or reckoning." },
                { heading: "The Reformer", description: "You were a reformer or visionary who called upon your community to awaken to a higher truth." },
                { heading: "A Life Reviewed", description: "Your soul has experienced a life that taught a profound lesson about karma, forgiveness, and rebirth." }
            ]
        }
    },
    {
        id: 21, name: "The World", image: card21,
        readings: {
            love: [
                { heading: "Completion and Wholeness", description: "You have reached a state of happy completion and wholeness in your relationship." },
                { heading: "A Successful Union", description: "This card signifies a successful, committed, and integrated partnership; a major relationship goal has been achieved." },
                { heading: "Shared World", description: "You and your partner have successfully built a world together and are ready to celebrate it." }
            ],
            career: [
                { heading: "Successful Completion", description: "You are successfully completing a major project, cycle, or even your entire career." },
                { heading: "Global Opportunities", description: "This can signify opportunities for international travel, global business, or working with people from around the world." },
                { heading: "Integration", description: "You have successfully integrated all the different parts of your skills and experience into a cohesive whole." }
            ],
            personality: [
                { heading: "Integrated and Whole", description: "You feel a sense of inner wholeness, peace, and integration with the world around you." },
                { heading: "Worldly", description: "You are a worldly individual, often well-traveled, who understands your place in the global community." },
                { heading: "Accomplished", description: "You are a person who successfully completes what you start, leading to a sense of accomplishment." }
            ],
            pastlife: [
                { heading: "The World Traveler", description: "You were a great traveler, explorer, or merchant whose life involved circling the globe." },
                { heading: "A Life of Fulfillment", description: "Your soul experienced a life of great accomplishment and fulfillment, completing a major karmic cycle." },
                { heading: "The Cosmopolitan", description: "You lived in a diverse, cosmopolitan place, learning the lesson that we are all interconnected." }
            ]
        }
    }
];