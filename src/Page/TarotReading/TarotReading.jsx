import React, { useState } from "react";
import { animate, motion } from "framer-motion";
import "./Cards.css";
import WeekendBackdrop from "./IMGS/weekend tarot background.jpg";
import WeekendIcon from "./IMGS/weekend tarot card.png";
import WeeklyBackdrop from "./IMGS/weekly tarot background.jpg";
import WeeklyIcon from "./IMGS/weekly tarot card.png";
import PartnerBackdrop from "./IMGS/where is my destined partner background.jpg";
import PartnerIcon from "./IMGS/where is my destined partner card.png";
import CareerBackdrop from "./IMGS/the first half of 2024 background.jpg";
import CareerIcon from "./IMGS/first half of 2024 card.png";
import LuckBackdrop from "./IMGS/how to change my luck background.jpg";
import LuckIcon from "./IMGS/how to change my luck card.png";
import HiddenCharmBackdrop from "./IMGS/my hidden charm background.jpg";
import HiddenCharmIcon from "./IMGS/my hidden charm card.png";
import TarotCards from "./TarotCards";

const TarotReading = () => {
  const Weekend = {
    backdrop: WeekendBackdrop,
    icon: WeekendIcon,
    head: "Weekend Tarot Fortune",
    p1: "Shake of the week's stress with a soul-stirring Tarot reading this weekend.",
    p2: "Unveil hidden possibilities and find clarity for the days ahead. ",
    cards: [
      {
        CardHead: "THE FOOL",
        CardInfo: [
          "THE FOOL—Taking a risk, A new beginning. Folly, mania, extravagance, intoxication, delirium, frenzy. The fool’s journey. To see the Fool generally indicates that you are on the verge of an exciting and unexpected new adventure.",
          " This path may require you to make a leap of faith but you will grow as a result of this new experience. You may be starting something new such as a job, relationship or school. The fool shows up to indicate the beginning of this new cycle in your life. The Fool is a card of spontaneity and adventure, reminding you to have faith in your journey and to embrace the unknown. He is unaware of the danger ahead and remains optimistic, trusting that the universe will take care of him. The Fool encourages us to take risks and make bold decisions, as long as we do so with a pure heart and an open mind.",
        ],
      },
      {
        CardHead: "THE MAGICIAN",
        CardInfo: [
          "The Magician is a powerful creator. He invites you to achieve your dreams by utilizing divine energy.  Connect with the universe through your imagination to manifest your desires into reality.",
          "The Magician card is one of the most powerful cards in the deck. It represents the ability to create your own reality. If you have drawn the Magician, it means that you have the ability to change your life for the better and the power to make your dreams come true. The magician is a master of illusion. He knows how to make things happen. If you want to create changes, the magician is the one to call.",
        ],
      },
      {
        CardHead: "THE HIGH PRIESTESS",
        CardInfo: [
          "THE HIGH PRIESTESS—Secrets, mystery, the future as yet unrevealed, silence, wisdom. Divine feminine energy. Your subconscious mind is your best guide.",
          "The High Priestess holds the keys to hidden knowledge and deep insights. Her connection to spirituality and inner knowing guides you towards a deeper understanding of yourself and the world around you. She invites introspection, encouraging you to trust your instincts and delve into the depths of your subconscious to unlock the secrets that reside within. Through her, we are reminded to honor our intuition and embrace the infinite wisdom that lies dormant within us all.",
        ],
      },
      {
        CardHead: "THE EMPRESS",
        CardInfo: [
          "THE EMPRESS—Fruitfulness, initiative. Mothering energy, embracing the qualities of nurturing and love. Connection to nature.",
          "The Empress card brings positive energy to your life, encouraging you to find joy in creative expression and nurturing those around you. It signifies material and emotional abundance, suggesting that you will be blessed with prosperity, happiness, and success. This card also represents motherhood and the responsibilities that come with it. It encourages you to be a loving, nurturing and supportive force in the lives of those around you. The Empress card also serves a as a reminder to take the time to connect with nature.",
        ],
      },
      {
        CardHead: "THE EMPEROR",
        CardInfo: [
          "THE EMPEROR—Power and Authority. Stability and security in life. Protection, aid, a great person, conviction, reason.",
          "An opportunity may be presenting itself. A new job or leadership role. You may find yourself becoming the boss of something. You are on top of your game right now, so take advantage of this position. When this card appears in a reading, it is a sign that you are in control of your life and have the ability to make things happen. It is your hard work, discipline and self control that have bought you this far. You are in charge now, and setting up your own rules and boundaries.",
        ],
      },
      {
        CardHead: "THE HIEROPHANT",
        CardInfo: [
          "THE HIEROPHANT—Sprituality and higher education. Marriage alliance, captivity, servitude, mercy and goodness, inspiration.",
          "You may be embarking upon a spiritual journey, or some form of education. You will find comfort in a group membership or as part of an institution. This card represents the guidance you will receive. Seek out individuals who can help you along your way. You are likely feeling secure in your beliefs at this time.",
        ],
      },
      {
        CardHead: "THE LOVERS",
        CardInfo: [
          "THE LOVERS—Attraction, love, beauty, choices, trials overcome. ",
          "You are being led to love. This card is about relationships and choices. It represents a decision that needs to be made, or a crossroads in your life. You may be starting a new relationship or strengthening an existing one. It can also indicate a non romantic relationship such as a friendship or partnership. The Lovers represent coming together and supporting each other in divine harmony. ",
        ],
      },
      {
        CardHead: "THE CHARIOT",
        CardInfo: [
          "THE CHARIOT—Progression, forward motion, vengeance.",
          "The Chariot indicates that the time is right for forward movement and progress. This card represents determination, willpower, and the ability to overcome obstacles. It suggests that you have a clear sense of purpose and are ready to take action to achieve your goals. No obstacle will be able to stop you. The Chariot also symbolizes control and the need to harness inner conflicts or opposing forces to steer toward success. Stay focused and disciplined to balance any conflicting aspects of your life. Self-sufficiency drives you towards your goals.",
        ],
      },
      {
        CardHead: "THE STRENGTH",
        CardInfo: [
          "STRENGTH—Power, energy, action, courage, magnanimity. ",
          "Strength predicts the triumphant conclusion to a major life problem, situation or temptation through strength of character. It is a very happy card if you are fighting illness or recovering from injury.",
          "Approach difficult situations with patience and grace, trusting that you have the ability to navigate through them. This card serves as a reminder that you have the strength within you to face any obstacle and emerge victorious, bringing forth a sense of inner harmony and peace. Tap into your personal power and embrace your fears rather than being controlled by them. It reminds you that true strength lies not in brute force, but in gentleness, compassion, and resilience.",
        ],
      },
      {
        CardHead: "THE HERMIT",
        CardInfo: [
          "THE HERMIT—Looking Within. Introspection, soul searching, solitude.",
          "You are honoring your spiritual self at this time. Take some time away from others to do some soul searching. You will find the guidance you need.The Hermit suggests that you are in a phase of introspection where you are drawing your attention inwards and looking for answers within. You are in need of a period of inner reflection, away from the current demands of your position.",
        ],
      },
      {
        CardHead: "THE WHEEL OF FORTUNE",
        CardInfo: [
          "WHEEL OF FORTUNE—Destiny, fortune, success, luck, felicity. You must go with the flow of life.",
          "This card is the wheel of life. Everything has a beginning and an end, the wheel will keep turning. Life will keep throwing lessons our way to keep us on our toes. We can never  know what is coming next and when the Wheel of Fortune shows up, there is a need to let go of the wheel and allow the universe to take you where you need to be. You are on a good path. Just ride the waves.",
        ],
      },
      {
        CardHead: "JUSTICE",
        CardInfo: [
          "JUSTICE—Equity, rightness, probity, executive, fairness, cause and effect.",
          "Seek balance and truth. Your actions have long term effects. Look for situations in your life that may require mediation and make sure that things are fair. You are being called to account for your actions and to make the fairest decision. Justice is the sword that cuts through a situation, and will not be swayed by outer beauty when deciding what is fair and just.",
        ],
      },
      {
        CardHead: "THE HANGED MAN",
        CardInfo: [
          "THE HANGED MAN—Wisdom, trials, circumspection, discernment, sacrifice, intuition, divination, prophecy. ",
          "You are suspended in time. This card suggests you need to suspend certain actions. Surrender is required now. You are in a period of indecision. Waiting might be what you need to do in order to achieve success. Wait for the proper opportunity. You may be embarking on a new spiritual journey. Let things be and allow the universe to do its work. Stillness grants perspective.",
        ],
      },
      {
        CardHead: "DEATH",
        CardInfo: [
          "DEATH—Endings, beginnings, change, mortality, destruction, corruption. ",
          "Change is here. The death of something old heralds the birth of something new. This is the natural transit to the next stage of being, a change of form in consciousness. It is unlikely that this card actually represents a physical death. Typically it implies an end, possibly of a relationship or interest, and therefore implies an increased sense of self-awareness. You are deeply connected to your higher self now. In order to grow we must let go of things not serving us",
        ],
      },
      {
        CardHead: "TEMPERANCE",
        CardInfo: [
          "TEMPERANCE—Economy, moderation, frugality, management, accommodation. ",
          "This card indicates a need for balance in your life. Choose moderation and you should learn to bring about balance, patience and moderation in your life. You should take the middle road, avoiding extremes and maintain a sense of calm. Have patience and avoid worrying about time. Accept differences. Look for the contrast provided by things that are not working. They can tell you a lot about what will.",
        ],
      },
      {
        CardHead: "THE DEVIL",
        CardInfo: [
          "THE DEVIL—Obsession, Materialism, Addiction.",
          "The Devil card can suggest that the you are in a cycle of self-destructive behavior. This may be due to addiction, fear, or other negative emotions. Seek help to break free from this cycle. If you see the Devil card in a reading, pay attention to what it is trying to tell you. It may be time to take a hard look at your own motivations and behaviors. Make some changes in your life to break free from negative patterns.",
        ],
      },
      {
        CardHead: "THE TOWER",
        CardInfo: [
          "THE TOWER—Sudden Change, misery, distress, ruin, indigence, adversity, calamity, disgrace, deception. ",
          "A change is in store for you. You must surrender to the storm. Something is happening which will alter the trajectory of your life. Change is a normal part of life. But it sometimes brings fear because it means we must abandon what we have previously known. The old ways are no longer useful. You will discover new beliefs to take their place.",
        ],
      },
      {
        CardHead: "THE STAR",
        CardInfo: [
          "THE STAR— Suggests hope and bright prospects in the future. Spiritual Guidance.",
          "When the Star card appears, you are likely to find yourself feeling inspired. Have faith in your dreams. This is a beautiful energy of love. You are being guided. The image on the Star card shows a woman kneeling by a body of water. She has a star above her head, one hand is pouring water from a jug onto the earth, and her other hand is pouring water into the pool. This symbolizes the free flowing abundance of blessings that are available to us all. ",
        ],
      },
      {
        CardHead: "THE MOON",
        CardInfo: [
          "THE MOON—Illusion, mystery, dreams. Hidden enemies, danger, calumny, darkness, terror, deception, error.",
          "You may be feeling confused.  The path may not be clear at this time. The answers are there, you just can’t see them. Your intuition can guide the way if you just take things one step at a time.It suggests a time when something is not as it appears to be. Perhaps a misunderstanding on your part, or a truth you cannot admit to yourself. ",
        ],
      },
      {
        CardHead: "THE SUN",
        CardInfo: [
          "THE SUN—Success, vitality, youth. Material happiness, fortunate marriage and contentment.",
          "You are a light. Allowing others to see the beauty and radiant energy that exists. As you shine this light on the world your radiance attracts more success.The Sun Tarot card indicates good fortune is on it's way. Expect happiness, joy and harmony. It represents the universe coming together and agreeing with your path and aiding forward movement into something greater.",
        ],
      },
      {
        CardHead: "JUDGEMENT",
        CardInfo: [
          "JUDGEMENT—Change of position, renewal, outcome. ",
          "You may be at a crossroads and faced with choices that have significant consequences. Something in your life requires a judgement call. The choices you make will align you with your life’s purpose. This card is referred to as a time of resurrection and awakening, a time when a period of our life comes to an absolute end making way for dynamic new beginnings. ",
        ],
      },
      {
        CardHead: "THE WORLD",
        CardInfo: [
          "THE WORLD—Completion, perfection, fulfillment. ",
          "The World card is a sign of success and completion. You have reached a point in your life where you are feeling fulfilled and accomplished. You have found your place in the world and are ready to move on to the next phase. You are feeling whole and complete. The World card is a sign that you have achieved your goals and are feeling fulfilled. You are in harmony with the world and are ready to embrace new opportunities and challenges.",
        ],
      },
    ],
  };
  const Weekly = {
    backdrop: WeeklyBackdrop,
    icon: WeeklyIcon,
    head: "Weekly Tarot Fortune",
    p1: "Navigate foggy weeks with Tarot's illuminating wisdom.",
    p2: "Dive into clarity and discover your best curse of action.",
    cards: [
      {
        CardHead: "THE FOOL",
        CardInfo: [
          "THE FOOL—Taking a risk, A new beginning. Folly, mania, extravagance, intoxication, delirium, frenzy. The fool’s journey. To see the Fool generally indicates that you are on the verge of an exciting and unexpected new adventure.",
          " This path may require you to make a leap of faith but you will grow as a result of this new experience. You may be starting something new such as a job, relationship or school. The fool shows up to indicate the beginning of this new cycle in your life. The Fool is a card of spontaneity and adventure, reminding you to have faith in your journey and to embrace the unknown. He is unaware of the danger ahead and remains optimistic, trusting that the universe will take care of him. The Fool encourages us to take risks and make bold decisions, as long as we do so with a pure heart and an open mind.",
        ],
      },
      {
        CardHead: "THE MAGICIAN",
        CardInfo: [
          "The Magician is a powerful creator. He invites you to achieve your dreams by utilizing divine energy.  Connect with the universe through your imagination to manifest your desires into reality.",
          "The Magician card is one of the most powerful cards in the deck. It represents the ability to create your own reality. If you have drawn the Magician, it means that you have the ability to change your life for the better and the power to make your dreams come true. The magician is a master of illusion. He knows how to make things happen. If you want to create changes, the magician is the one to call.",
        ],
      },
      {
        CardHead: "THE HIGH PRIESTESS",
        CardInfo: [
          "THE HIGH PRIESTESS—Secrets, mystery, the future as yet unrevealed, silence, wisdom. Divine feminine energy. Your subconscious mind is your best guide.",
          "The High Priestess holds the keys to hidden knowledge and deep insights. Her connection to spirituality and inner knowing guides you towards a deeper understanding of yourself and the world around you. She invites introspection, encouraging you to trust your instincts and delve into the depths of your subconscious to unlock the secrets that reside within. Through her, we are reminded to honor our intuition and embrace the infinite wisdom that lies dormant within us all.",
        ],
      },
      {
        CardHead: "THE EMPRESS",
        CardInfo: [
          "THE EMPRESS—Fruitfulness, initiative. Mothering energy, embracing the qualities of nurturing and love. Connection to nature.",
          "The Empress card brings positive energy to your life, encouraging you to find joy in creative expression and nurturing those around you. It signifies material and emotional abundance, suggesting that you will be blessed with prosperity, happiness, and success. This card also represents motherhood and the responsibilities that come with it. It encourages you to be a loving, nurturing and supportive force in the lives of those around you. The Empress card also serves a as a reminder to take the time to connect with nature.",
        ],
      },
      {
        CardHead: "THE EMPEROR",
        CardInfo: [
          "THE EMPEROR—Power and Authority. Stability and security in life. Protection, aid, a great person, conviction, reason.",
          "An opportunity may be presenting itself. A new job or leadership role. You may find yourself becoming the boss of something. You are on top of your game right now, so take advantage of this position. When this card appears in a reading, it is a sign that you are in control of your life and have the ability to make things happen. It is your hard work, discipline and self control that have bought you this far. You are in charge now, and setting up your own rules and boundaries.",
        ],
      },
      {
        CardHead: "THE HIEROPHANT",
        CardInfo: [
          "THE HIEROPHANT—Sprituality and higher education. Marriage alliance, captivity, servitude, mercy and goodness, inspiration.",
          "You may be embarking upon a spiritual journey, or some form of education. You will find comfort in a group membership or as part of an institution. This card represents the guidance you will receive. Seek out individuals who can help you along your way. You are likely feeling secure in your beliefs at this time.",
        ],
      },
      {
        CardHead: "THE LOVERS",
        CardInfo: [
          "THE LOVERS—Attraction, love, beauty, choices, trials overcome. ",
          "You are being led to love. This card is about relationships and choices. It represents a decision that needs to be made, or a crossroads in your life. You may be starting a new relationship or strengthening an existing one. It can also indicate a non romantic relationship such as a friendship or partnership. The Lovers represent coming together and supporting each other in divine harmony. ",
        ],
      },
      {
        CardHead: "THE CHARIOT",
        CardInfo: [
          "THE CHARIOT—Progression, forward motion, vengeance.",
          "The Chariot indicates that the time is right for forward movement and progress. This card represents determination, willpower, and the ability to overcome obstacles. It suggests that you have a clear sense of purpose and are ready to take action to achieve your goals. No obstacle will be able to stop you. The Chariot also symbolizes control and the need to harness inner conflicts or opposing forces to steer toward success. Stay focused and disciplined to balance any conflicting aspects of your life. Self-sufficiency drives you towards your goals.",
        ],
      },
      {
        CardHead: "THE STRENGTH",
        CardInfo: [
          "STRENGTH—Power, energy, action, courage, magnanimity. ",
          "Strength predicts the triumphant conclusion to a major life problem, situation or temptation through strength of character. It is a very happy card if you are fighting illness or recovering from injury.",
          "Approach difficult situations with patience and grace, trusting that you have the ability to navigate through them. This card serves as a reminder that you have the strength within you to face any obstacle and emerge victorious, bringing forth a sense of inner harmony and peace. Tap into your personal power and embrace your fears rather than being controlled by them. It reminds you that true strength lies not in brute force, but in gentleness, compassion, and resilience.",
        ],
      },
      {
        CardHead: "THE HERMIT",
        CardInfo: [
          "THE HERMIT—Looking Within. Introspection, soul searching, solitude.",
          "You are honoring your spiritual self at this time. Take some time away from others to do some soul searching. You will find the guidance you need.The Hermit suggests that you are in a phase of introspection where you are drawing your attention inwards and looking for answers within. You are in need of a period of inner reflection, away from the current demands of your position.",
        ],
      },
      {
        CardHead: "THE WHEEL OF FORTUNE",
        CardInfo: [
          "WHEEL OF FORTUNE—Destiny, fortune, success, luck, felicity. You must go with the flow of life.",
          "This card is the wheel of life. Everything has a beginning and an end, the wheel will keep turning. Life will keep throwing lessons our way to keep us on our toes. We can never  know what is coming next and when the Wheel of Fortune shows up, there is a need to let go of the wheel and allow the universe to take you where you need to be. You are on a good path. Just ride the waves.",
        ],
      },
      {
        CardHead: "JUSTICE",
        CardInfo: [
          "JUSTICE—Equity, rightness, probity, executive, fairness, cause and effect.",
          "Seek balance and truth. Your actions have long term effects. Look for situations in your life that may require mediation and make sure that things are fair. You are being called to account for your actions and to make the fairest decision. Justice is the sword that cuts through a situation, and will not be swayed by outer beauty when deciding what is fair and just.",
        ],
      },
      {
        CardHead: "THE HANGED MAN",
        CardInfo: [
          "THE HANGED MAN—Wisdom, trials, circumspection, discernment, sacrifice, intuition, divination, prophecy. ",
          "You are suspended in time. This card suggests you need to suspend certain actions. Surrender is required now. You are in a period of indecision. Waiting might be what you need to do in order to achieve success. Wait for the proper opportunity. You may be embarking on a new spiritual journey. Let things be and allow the universe to do its work. Stillness grants perspective.",
        ],
      },
      {
        CardHead: "DEATH",
        CardInfo: [
          "DEATH—Endings, beginnings, change, mortality, destruction, corruption. ",
          "Change is here. The death of something old heralds the birth of something new. This is the natural transit to the next stage of being, a change of form in consciousness. It is unlikely that this card actually represents a physical death. Typically it implies an end, possibly of a relationship or interest, and therefore implies an increased sense of self-awareness. You are deeply connected to your higher self now. In order to grow we must let go of things not serving us",
        ],
      },
      {
        CardHead: "TEMPERANCE",
        CardInfo: [
          "TEMPERANCE—Economy, moderation, frugality, management, accommodation. ",
          "This card indicates a need for balance in your life. Choose moderation and you should learn to bring about balance, patience and moderation in your life. You should take the middle road, avoiding extremes and maintain a sense of calm. Have patience and avoid worrying about time. Accept differences. Look for the contrast provided by things that are not working. They can tell you a lot about what will.",
        ],
      },
      {
        CardHead: "THE DEVIL",
        CardInfo: [
          "THE DEVIL—Obsession, Materialism, Addiction.",
          "The Devil card can suggest that the you are in a cycle of self-destructive behavior. This may be due to addiction, fear, or other negative emotions. Seek help to break free from this cycle. If you see the Devil card in a reading, pay attention to what it is trying to tell you. It may be time to take a hard look at your own motivations and behaviors. Make some changes in your life to break free from negative patterns.",
        ],
      },
      {
        CardHead: "THE TOWER",
        CardInfo: [
          "THE TOWER—Sudden Change, misery, distress, ruin, indigence, adversity, calamity, disgrace, deception. ",
          "A change is in store for you. You must surrender to the storm. Something is happening which will alter the trajectory of your life. Change is a normal part of life. But it sometimes brings fear because it means we must abandon what we have previously known. The old ways are no longer useful. You will discover new beliefs to take their place.",
        ],
      },
      {
        CardHead: "THE STAR",
        CardInfo: [
          "THE STAR— Suggests hope and bright prospects in the future. Spiritual Guidance.",
          "When the Star card appears, you are likely to find yourself feeling inspired. Have faith in your dreams. This is a beautiful energy of love. You are being guided. The image on the Star card shows a woman kneeling by a body of water. She has a star above her head, one hand is pouring water from a jug onto the earth, and her other hand is pouring water into the pool. This symbolizes the free flowing abundance of blessings that are available to us all. ",
        ],
      },
      {
        CardHead: "THE MOON",
        CardInfo: [
          "THE MOON—Illusion, mystery, dreams. Hidden enemies, danger, calumny, darkness, terror, deception, error.",
          "You may be feeling confused.  The path may not be clear at this time. The answers are there, you just can’t see them. Your intuition can guide the way if you just take things one step at a time.It suggests a time when something is not as it appears to be. Perhaps a misunderstanding on your part, or a truth you cannot admit to yourself. ",
        ],
      },
      {
        CardHead: "THE SUN",
        CardInfo: [
          "THE SUN—Success, vitality, youth. Material happiness, fortunate marriage and contentment.",
          "You are a light. Allowing others to see the beauty and radiant energy that exists. As you shine this light on the world your radiance attracts more success.The Sun Tarot card indicates good fortune is on it's way. Expect happiness, joy and harmony. It represents the universe coming together and agreeing with your path and aiding forward movement into something greater.",
        ],
      },
      {
        CardHead: "JUDGEMENT",
        CardInfo: [
          "JUDGEMENT—Change of position, renewal, outcome. ",
          "You may be at a crossroads and faced with choices that have significant consequences. Something in your life requires a judgement call. The choices you make will align you with your life’s purpose. This card is referred to as a time of resurrection and awakening, a time when a period of our life comes to an absolute end making way for dynamic new beginnings. ",
        ],
      },
      {
        CardHead: "THE WORLD",
        CardInfo: [
          "THE WORLD—Completion, perfection, fulfillment. ",
          "The World card is a sign of success and completion. You have reached a point in your life where you are feeling fulfilled and accomplished. You have found your place in the world and are ready to move on to the next phase. You are feeling whole and complete. The World card is a sign that you have achieved your goals and are feeling fulfilled. You are in harmony with the world and are ready to embrace new opportunities and challenges.",
        ],
      },
    ],
  };
  const Daily = {
    backdrop: LuckBackdrop,
    icon: LuckIcon,
    head: "Daily Tarot Question",
    p1: "Hold on tight. You're about to uncover some juicy intel about your destined partner!",
    p2: "Want a hint?Let the wisdom of Tarot guide you, my friend.",
    cards: [
      {
        CardHead: "The Fool",
        CardInfo: [
          " THE FOOL—Taking a risk, A new beginning. Folly, mania, extravagance, intoxication, delirium, frenzy. The fool’s journey.",
          "This card can also symbolize a new phase in life such as starting a new job, moving to a new city, or beginning a new relationship. Embrace this new chapter in life with optimism and an open heart. The Fool reminds us that it's never too late to start fresh and that we can always take a leap of faith towards our dreams. However, while the Fool encourages us to embrace new experiences and take risks, we should still exercise caution. Blindly diving into the unknown can lead to unwanted consequences, so be sure to trust your instincts and listen to those around you.",
        ],
      },
      {
        CardHead: "The Magician",
        CardInfo: [
          "THE MAGICIAN—Skill, creation, diplomacy, confidence, will. Imagination. ",
          "The magician is a reminder that you are the creator of your own reality and the master of your own destiny. If you are feeling lost or stuck in your life, the magician can help you find your way. He is a powerful guide and teacher. He can help you find your path and show you the way to your dreams. Call on the magician when you need a little help manifesting your dreams. He is always there to help.",
        ],
      },
      {
        CardHead: "The High Priestess",
        CardInfo: [
          "THE HIGH PRIESTESS—Secrets, mystery, the future as yet unrevealed, silence, wisdom. Divine feminine energy. Your subconscious mind is your best guide.",
          "This is a time to reflect on things. You will find the answers you seek by quieting your mind & following your intuition. Trust that your inner knowing holds the answers you seek.  This card suggests that it is time to retreat and spend some time considering the situation. Trust your inner instincts. You will find the answers you seek by quieting your mind and following your intuition.",
        ],
      },
      {
        CardHead: "The Empress",
        CardInfo: [
          "THE EMPRESS—Fruitfulness, initiative. Mothering energy, embracing the qualities of nurturing and love. Connection to nature.",
          "The Empress card is a powerful symbol of creativity. It encourages you to tap into your creative energy, nurture those around you and embrace nature. This card reminds you that you are blessed with abundance, and prosperity is within reach. All you need to do is embrace the nurturing and creative energy within you and the Universe will provide you with all the abundance you need.",
        ],
      },
      {
        CardHead: "The Emperor",
        CardInfo: [
          "THE EMPEROR—Power and Authority. Stability and security in life. Protection, aid, a great person, conviction, reason.",
          "Today's Daily Tarot Draw brings forth The Emperor card, symbolizing power, stability, and authority. As the Emperor takes his seat on the throne, his regal presence emanates strength and leadership. This card reminds us to embrace our inner ruler and tap into our own personal power. It urges us to establish order and structure in our lives, making decisions with confidence and taking control of any chaotic situations that may arise. The Emperor is a reminder that discipline and rational thinking are essential for achieving success. By harnessing our inner Emperor, we can navigate challenges with wisdom and assertiveness, creating a solid foundation for our ambitions and goals.",
        ],
      },
      {
        CardHead: "The Hierophant",
        CardInfo: [
          "THE HIEROPHANT—Sprituality and higher education. Marriage alliance, captivity, servitude, mercy and goodness, inspiration.",
          "In today's draw, this card invites us to embrace the wisdom of established systems and teachings. It reminds us to seek knowledge from respected authorities or mentors who can offer guidance in times of uncertainty. The Hierophant suggests that connecting with our roots and adhering to established practices can bring clarity and stability to our lives. This card calls us to honor our spiritual beliefs and find solace in the rituals that provide a sense of meaning and purpose. It serves as a reminder that sometimes the answers we seek can be found within the tried and true frameworks that have stood the test of time. Embracing tradition can be a source of comfort and a means of connecting to something greater than ourselves.",
        ],
      },
      {
        CardHead: "The Chariot",
        CardInfo: [
          "THE CHARIOT—Progression, forward motion, vengeance.",
          "Today, the Chariot card takes center stage as the Card of the Day, guiding us on a journey of determination, willpower, and control. The Chariot signifies the pursuit of victory through sheer force of character. It urges us to harness our inner strength and overcome obstacles that stand in our way. As we steer the chariot, represented by two majestic and noble creatures, we are reminded that success comes to those who master their emotions and drive forward with conviction. This powerful card serves as a reminder that we possess the ability to conquer any challenge and achieve our goals if we remain focused and resolute. Today, let the Chariot guide us as we strive for triumph in all aspects of our lives.",
        ],
      },
      {
        CardHead: "The Hermit",
        CardInfo: [
          "THE HERMIT—Looking Within. Introspection, soul searching, solitude.",
          "The Hermit card typically indicates that it is time for you to focus on yourself. You may need to take some time out to find your inner peace and solitude. This may mean taking a break from work, or simply spending some time alone in nature. You may also want to try meditation or yoga, as these can help you to connect with your inner self. The Hermit card is all about finding your inner peace and solitude. This can be a very beneficial process, as it can help you to focus on your own needs and desires. It can also give you the time and space that you need to reflect on your life and what you want to achieve.",
        ],
      },
      {
        CardHead: "The Wheel of Fortune",
        CardInfo: [
          "WHEEL OF FORTUNE—Destiny, fortune, success, luck, felicity. You must go with the flow of life.",
          "The Wheel of Fortune is a card of destiny, good fortune, and success. It represents the ebb and flow of life. It is a reminder that nothing stays the same forever and that we must go with the flow. Change is a natural part of life and the Wheel of Fortune reminds us to embrace it. There is nothing to be gained by trying to direct outcomes which we have no control over.",
        ],
      },
      {
        CardHead: "Justice",
        CardInfo: [
          "JUSTICE—Equity, rightness, probity, executive, fairness, cause and effect.",
          "The Justice card from the Daily Tarot carries a powerful message of balance and fairness. It serves as a constant reminder that in every situation, justice will prevail. Represented by the scales of justice and a robed figure, this card urges us to consider the consequences of our actions and make choices that align with integrity and truth. It calls for accountability and encourages us to take responsibility for our decisions. The Justice card reminds us that karma plays a significant role in our lives and that everything we do will have an impact, inviting us to approach each day with a sense of equanimity and a commitment to doing what is right. With its unwavering presence, Justice inspires us to seek harmony and fairness in all aspects of our lives, reminding us that justice is not only external but also an essential part of our inner selves.",
        ],
      },
      {
        CardHead: "The Hanged Man",
        CardInfo: [
          "THE HANGED MAN—Wisdom, trials, circumspection, discernment, sacrifice, intuition, divination, prophecy. ",
          "The Hanged Man suggests that the answer you're seeking will come in due time.  This card can also represent a period of self-sacrifice. You may be giving up something important to you in order to achieve a greater goal. It’s a call to slow down, be introspective, and consider all your options before making any decisions.",
        ],
      },
      {
        CardHead: "Death",
        CardInfo: [
          "DEATH—Endings, beginnings, change, mortality, destruction, corruption. ",
          "The Death tarot card is often misinterpreted as a literal omen of death, but its symbolism goes deeper than that. The card represents transformation. If you're facing a major life change, the death tarot card represents the end of one chapter and the start of another. While the death tarot card can be associated with loss or mourning, it's also a reminder that change is a natural part of life. Nothing stays the same forever, and the death tarot card can represent the necessary death of something old to make way for something new. If you're currently going through a tough time, know that this too shall pass. The death tarot card can represent a dark night of the soul, but it's also a reminder that transformation is possible. Trust that you have the strength to make it through to the other side.",
        ],
      },
      {
        CardHead: "Temprance",
        CardInfo: [
          "TEMPERANCE—Economy, moderation, frugality, management, accommodation. ",
          "The Temperance tarot card is all about finding balance in your life. It's the card of moderation, frugality, and management.  When you see the Temperance card in a reading, it's a sign that you need to step back and focus on creating more harmony. This can mean making small changes in your daily routine to create more time for yourself, or it may be something bigger like changing jobs. Whatever it is, the key is to find a middle ground that works for you. It's time to avoid extremes and to focus on creating calm and harmony.  The Temperance card can also indicate that you're in a period of transition. You may be moving between phases in your life, or working to integrate different aspects of yourself.  Whatever the case, the key is to maintain balance and to be patient. If you can do that, you'll be able to achieve anything you set your mind to.",
        ],
      },
      {
        CardHead: "The Devil",
        CardInfo: [
          "THE DEVIL—Obsession, Materialism, Addiction.",
          "Today, the Daily Tarot Draw presents us with The Devil card, epitomizing temptation, materialism, and bondage. Its ominous appearance serves as a reminder that we may find ourselves caught in the snare of worldly desires and unhealthy patterns. This card compels us to examine the vices that hold us captive and the situations that drain our personal power. It asks us to confront and conquer our inner demons, whether they manifest as addictions, fears, or toxic relationships. The Devil card urges us to break free from the self-imposed chains that hinder our growth and challenge us to forge a new path towards liberation and self-realization. As we navigate through this web of temptation, let us remain vigilant, acknowledging the power we hold within to triumph over adversity and emerge stronger and wiser.",
        ],
      },
    ],
  };
  const Partner = {
    backdrop: PartnerBackdrop,
    icon: PartnerIcon,
    head: "Where is my destined partner?",
    p1: "Hold on tight. You're about to uncover some juicy intel about your destined partner!",
    p2: "Want a hint?Let the wisdom of Tarot guide you, my friend.",
    cards: [
      {
        CardHead: "The Fool",
        CardInfo: [
          " THE FOOL—Taking a risk, A new beginning. Folly, mania, extravagance, intoxication, delirium, frenzy. The fool’s journey.",
          "The Fool Tarot Card has a deep and intricate meaning when it comes to love readings. It symbolizes new beginnings and that feeling of excitement. It represents a sense of freedom and allowing oneself to be vulnerable in matters of the heart. The Fool encourages us to trust our instincts and follow our hearts without fear of judgment or failure. In a love reading, this card suggests that it is time to embrace spontaneity and let go of any past baggage or preconceived notions. It is a reminder to approach love with an open mind and a childlike sense of wonder, ready to embark on a new romantic adventure. The Fool encourages us to take risks and be open to new experiences, as they may lead us to profound and transformative connections.",
        ],
      },
      {
        CardHead: "The Magician",
        CardInfo: [
          "THE MAGICIAN—Skill, creation, diplomacy, confidence, will. Imagination. ",
          "The Magician Tarot card in a love reading holds immense potential for relationships. It symbolizes the ability to manifest a new relationship or to create a strong bond with your partner. It suggests that with focus, intention, and careful manipulation of the elements at hand, you have the capability to shape the course of your love life. The Magician encourages you to use your communication skills and charming charisma to enchant your loved one, as well as to maintain a balance between your own needs and the needs of your partner. This card signifies the potential for growth and transformation in your romantic endeavors, reminding you of the power within yourself to co-create a fulfilling, harmonious partnership. Trust in your innate abilities, align your actions with your heart's desires, and watch as the magic unfolds in your love life.",
        ],
      },
      {
        CardHead: "The High Priestess",
        CardInfo: [
          "THE HIGH PRIESTESS—Secrets, mystery, the future as yet unrevealed, silence, wisdom. Divine feminine energy. Your subconscious mind is your best guide.",
          "The High Priestess Tarot card in matters of love represents a deeply intuitive and mysterious connection. This card embodies the power of feminine energy and taps into the realms of the unconscious. When the High Priestess graces a love reading, it suggests a need for introspection and listening to one's inner voice. In a romantic relationship, this card signals a need for secrecy and discretion, urging the couple to honor the sacredness of their bond. The High Priestess encourages trust and understanding, emphasizing the importance of emotional depth and mystic union. For singles, this card advises staying patient and focusing on self-discovery, as a meaningful connection could manifest when the time is right.",
        ],
      },
      {
        CardHead: "The Empress",
        CardInfo: [
          "THE EMPRESS—Fruitfulness, initiative. Mothering energy, embracing the qualities of nurturing and love. Connection to nature.",
          "The Empress Tarot card signifies a strong, stable, and loving partnership, where both parties feel cherished and supported. The Empress signifies fertility and the creation of new beginnings, making it a promising card for those seeking to start a family or deepen their emotional bond. In love readings, the presence of The Empress suggests a period of sensual pleasure, emotional security, and deep emotional connection. This card reminds individuals to embrace their femininity, tap into their sensuality, and cultivate an atmosphere of love and harmony within their romantic relationships.",
        ],
      },
      {
        CardHead: "The Emperor",
        CardInfo: [
          "THE EMPEROR—Power and Authority. Stability and security in life. Protection, aid, a great person, conviction, reason.",
          "The Emperor in a Love Reading is a powerful omen, representing stability, structure, and authority in a relationship. When this card appears, it suggests that a strong and dominant figure may be entering your love life or that your existing partner is taking on a more authoritative role. This can bring a sense of security and structure to the relationship, but it may also bring some challenges. It's essential to find a balance between maintaining control and allowing room for emotional expression and vulnerability. The Emperor encourages you to set boundaries, establish clear expectations, and take charge of your love life. By embodying his leadership qualities with wisdom and fairness, you can build a solid foundation for a lasting and fulfilling partnership.",
        ],
      },
      {
        CardHead: "The Hierophant",
        CardInfo: [
          "THE HIEROPHANT—Sprituality and higher education. Marriage alliance, captivity, servitude, mercy and goodness, inspiration.",
          "When The Hierophant appears in a love reading, it signifies a traditional and structured approach to relationships. This card suggests that the partnership you are currently involved in or seeking will have a strong emphasis on commitment, loyalty, and shared values. The Hierophant encourages you to pursue a deeper connection based on mutual respect and spiritual harmony. It indicates a need for stability and long-term commitment in your love life. This card can also symbolize seeking guidance from someone wise, such as a counselor or mentor, to navigate any challenges you may face in your romantic endeavors. The Hierophant reminds you to honor and adhere to the traditions and values that hold meaning for you as you navigate the complexities of love.",
        ],
      },
      {
        CardHead: "The Lovers",
        CardInfo: [
          "THE LOVERS—Attraction, love, beauty, choices, trials overcome. ",
          "The Lovers can also represent love and romance. If you are single, this card can indicate that you will soon meet someone special.  The Lovers can also indicate a need to balance your own needs with the needs of others. This is not always an easy task, but it is one that is worth striving for. After all, healthy relationships are based on give and take. If you find yourself in a one-sided relationship, it may be time to reassess your priorities.  No matter what the Lovers tarot card means for you, remember that the most important thing is to stay true to yourself. Listen to your heart, and you will know what to do. ",
        ],
      },
      {
        CardHead: "The Chariot",
        CardInfo: [
          "THE CHARIOT—Progression, forward motion, vengeance.",
          "When The Chariot appears in a love reading, it symbolizes the need for balance and determination in a romantic relationship. This card encourages you to take charge of your own love life and steer it in the direction you desire. It suggests that you may be facing obstacles or experiencing a clash of wills with your partner, but it also reminds you that with enough focus and perseverance, you can overcome any challenges in your relationship. The Chariot is a powerful card that indicates the importance of maintaining harmony and control in your love life, ultimately leading to success and victory in matters of the heart.",
        ],
      },
      {
        CardHead: "The Strength",
        CardInfo: [
          "STRENGTH—Power, energy, action, courage, magnanimity. ",
          "The Strength tarot card represents love and relationships with a unique perspective. It embodies the power of compassion, courage, and self-control within a romantic bond. When this card appears in a love tarot reading, it signifies a deep and profound connection characterized by mutual respect and trust. This card reinforces the idea that true strength lies in vulnerability, as it encourages individuals to embrace their authentic selves and express their emotions openly. It reminds us that love requires patience and understanding, as well as the ability to navigate challenges with grace and resilience. Overall, the Strength tarot card suggests that love is a transformative force that can bring out the very best in both partners, fostering a relationship built on mutual growth and unwavering support.",
        ],
      },
      {
        CardHead: "The Hermit",
        CardInfo: [
          "THE HERMIT—Looking Within. Introspection, soul searching, solitude.",
          "In a love reading, when The Hermit card appears, it signifies that introspection and self-reflection are essential elements for finding love and maintaining a healthy relationship. The presence of The Hermit encourages individuals to take a step back from the external distractions and dive into their own inner world to gain clarity about their desires, needs, and personal growth. This card suggests that solitude and alone time can be beneficial for understanding oneself better before embarking on a romantic journey. By seeking solitude, one can delve deep into their own emotions and understand the patterns of their past relationships, enabling them to make wiser choices in matters of the heart. It reminds individuals to embrace periods of solitude as an opportunity to grow, heal, and become a more whole and authentic version of themselves, which in turn paves the way for a genuine and meaningful connection with others.",
        ],
      },
      {
        CardHead: "The Wheel of Fortune",
        CardInfo: [
          "WHEEL OF FORTUNE—Destiny, fortune, success, luck, felicity. You must go with the flow of life.",
          "In matters of love, the Wheel of Fortune signifies a sense of destiny and good fortune. It assures us that better times are on the horizon, especially if we have been facing difficulties previously. This card brings a glimmer of hope, indicating that luck and prosperity are within reach. It encourages us to trust in the flow of life and to remain open to the possibilities that lie ahead..",
        ],
      },
      {
        CardHead: "Justice",
        CardInfo: [
          "JUSTICE—Equity, rightness, probity, executive, fairness, cause and effect.",
          "The Justice tarot card holds great significance when it comes to matters of love and relationships. Its presence symbolizes balance, fairness, and the alignment of actions with consequences. In the realm of love, this card encourages individuals to assess their partnerships with an unbiased lens, ensuring that harmony and equity prevail. It urges one to approach conflicts or disputes with a level-headed demeanor, seeking resolutions that are just and reasonable for all parties involved. The Justice card reminds us that honesty, integrity, and clear communication are crucial in cultivating healthy and authentic connections. So, if you pull this card in a love reading, embrace its wisdom and let it guide you towards harmony and fairness in matters of the heart.",
        ],
      },
      {
        CardHead: "The Hanged Man",
        CardInfo: [
          "THE HANGED MAN—Wisdom, trials, circumspection, discernment, sacrifice, intuition, divination, prophecy. ",
          "In a love reading, The Hanged Man signifies the need for a shift in perspective and patience when it comes to romantic relationships. It suggests that sacrifice and letting go of control may be necessary to find inner peace and harmony in love. This card reminds us to look at love from a different angle, to release any expectations or attachments, and to trust in the divine timing of relationships. The Hanged Man encourages us to embrace stillness and surrender, knowing that sometimes the greatest growth and transformation occur when we release our grip on what we think we want in love. So, if you find yourself in a love reading with The Hanged Man, take it as a gentle reminder that in matters of the heart, patience and flexibility can lead to profound breakthroughs and spiritual growth.",
        ],
      },
      {
        CardHead: "Death",
        CardInfo: [
          "DEATH—Endings, beginnings, change, mortality, destruction, corruption. ",
          "In addition to representing personal transformation, the Death card also encourages the release of unhealthy attachments in your life. It invites you to let go of relationships, patterns, or situations that no longer serve your highest good. This act of letting go is an important part of the journey, as it creates space for new and positive experiences to enter your life.Ultimately, the Death card urges you to trust the process of change and transformation. It reminds you that although change may be intimidating, it is necessary for your personal growth and the unfolding of your life's path. Embrace the lessons and opportunities that come with change, for they hold the potential to bring about profound positive shifts in your life. Remember, even in the face of uncertainty, you possess the inner strength to navigate through any transition and emerge stronger on the other side.",
        ],
      },
      {
        CardHead: "Temperance",
        CardInfo: [
          "TEMPERANCE—Economy, moderation, frugality, management, accommodation. ",
          "When it comes to matters of the heart, Temperance in Love signifies finding harmony and balance in relationships. It urges us to seek compromise and understanding, blending the energies between two individuals to create a bond that is both stable and nurturing. This tarot card reminds us to approach love with patience and moderation, avoiding extremes and impulsive actions. It encourages us to find the middle ground, allowing emotions to flow and grow organically. Temperance in Love guides us towards forming deep connections built on mutual respect and emotional stability, bringing a sense of equilibrium into our romantic endeavors.",
        ],
      },
      {
        CardHead: "The Devil",
        CardInfo: [
          "THE DEVIL—Obsession, Materialism, Addiction.",
          "When it comes to exploring the realm of love and relationships, The Devil tarot card can serve as a cautionary symbol. With its ominous imagery and associations with temptation and addiction, it warns of the potential dangers that could arise when our desires and attachments become too unhealthy or excessive. This card reminds us that while indulgence may offer temporary pleasure, it often comes at the cost of personal growth and spiritual liberation. If we find ourselves entangled in toxic dynamics or making choices based solely on immediate gratification, The Devil reminds us to stay vigilant and break free from self-imposed chains, so we can pave a path towards genuine connection and emotional fulfillment.",
        ],
      },
    ],
  };
  const Career = {
    backdrop: CareerBackdrop,
    icon: CareerIcon,
    head: "Career ",
    p1: "Navigate foggy weeks with Tarot's illuminating wisdom.",
    p2: "Dive into clarity and discover your best curse of action.",
    cards: [
      {
        CardHead: "THe Magician",
        CardInfo: [
          "THE MAGICIAN—Skill, creation, diplomacy, confidence, will. Imagination.",
          "The Magician card represents a powerful and transformative energy that can greatly influence one's professional path. With the ability to manifest ideas into reality, the Magician encourages individuals to tap into their skills and resources to achieve their goals. This card is a reminder that you possess all the necessary tools to succeed in your career endeavors. By harnessing your creativity and focusing your intentions, you have the power to make significant strides and create the career you desire. Embrace your innate talents, trust in your abilities, and take decisive actions to manifest success in your professional life. Use your influence wisely, and watch as your career flourishes with abundance and fulfillment.",
        ],
      },
      {
        CardHead: "The Lovers",
        CardInfo: [
          "THE LOVERS—Attraction, love, beauty, choices, trials overcome. ",
          "When it comes to The Lovers in career, this tarot card signifies a crucial decision that needs to be made. This decision may involve choosing between two job opportunities or weighing the pros and cons of a career-related dilemma. The Lovers card emphasizes the importance of following your heart and aligning your choices with your true passions. It also highlights the significance of harmony and collaboration within the workplace. This card encourages you to seek partnerships that not only enhance your own growth but also contribute positively to the overall work environment. So, before making any major career moves, take a moment to reflect on your values, desires, and the impact your choices may have on others.",
        ],
      },
      {
        CardHead: "The Chariot",
        CardInfo: [
          "THE CHARIOT—Progression, forward motion, vengeance.",
          "The Chariot represents a powerful force propelling one's career forward. It symbolizes determination, focus, and a strong sense of direction. With the Chariot as a guide, individuals can overcome obstacles and triumph over challenges in their professional lives. This tarot card encourages taking control of one's destiny and harnessing inner strength to achieve success. It reminds us that career paths are dynamic and require constant navigation, but with a clear vision and unwavering commitment, the rewards can be abundant. The Chariot for career signifies the need to stay motivated, agile, and disciplined on the path towards reaching our professional goals.",
        ],
      },
      {
        CardHead: "The Strength",
        CardInfo: [
          "STRENGTH—Power, energy, action, courage, magnanimity. ",
          "Strength for Finances and Career is an essential aspect of our lives, providing us with the power and resilience to navigate the challenges and ensure our prosperity. When we possess the strength to face financial hurdles, we can overcome obstacles with determination and fortitude. In the realm of career, strength empowers us to assert ourselves, seize opportunities, and make confident decisions that lead to professional success. Whether it's demonstrating the courage to negotiate a salary or the tenacity to persevere through setbacks, strength plays a crucial role in shaping our financial and career outcomes. Thus, harnessing strength enables us to break free from limitations, tap into our potential, and build a solid foundation for long-term stability and growth.",
        ],
      },
      {
        CardHead: "The Hermit",
        CardInfo: [
          "THE HERMIT—Looking Within. Introspection, soul searching, solitude.",
          "The Hermit is a powerful archetype that can have a significant impact when it comes to career and finances. As the name suggests, this card represents a period of solitude and introspection, where one must withdraw from the hustle and bustle of the outside world to focus on their own path. In the context of work, the presence of the Hermit suggests the need for introspection and self-reflection. It encourages you to take a step back from your current situation, reassess your goals, and evaluate whether you are on the right path. This card often signifies a time of personal growth and self-discovery, where you may find yourself seeking deeper meaning and purpose in your work. It encourages you to trust your instincts and listen to your inner voice when making important career decisions. In terms of finances, the Hermit reminds you of the importance of being financially independent and self-reliant. It encourages you to take a closer look at your spending habits and to prioritize your financial goals. This card suggests that you may need to make some temporary sacrifices in order to achieve long-term financial stability. It also emphasizes the importance of seeking out wise counsel and advice when it comes to managing your money. The Hermit reminds you that sometimes the best way to move forward financially is to step back, take stock of your resources, and plan your next moves carefully. It encourages you to be patient and disciplined in your approach to money management, knowing that it will ultimately lead to a brighter and more secure financial future.",
        ],
      },
      {
        CardHead: "The Wheel of Fortune",
        CardInfo: [
          "WHEEL OF FORTUNE—Destiny, fortune, success, luck, felicity. You must go with the flow of life.",
          "The Justice tarot card holds significant implications in the realms of career and finance. This powerful card brings balance, fairness, and equality to these areas of life. When it appears in a career reading, it signifies that decisions or actions taken will be met with just outcomes. It encourages individuals to be honest and ethical in the workplace, as this will lead to success and recognition. In terms of finance, the Justice card urges individuals to take a measured and responsible approach. It emphasizes the need for financial fairness and equitable distribution of resources. This card reminds us that by making informed and just choices, we can attain financial stability and cultivate long-term prosperity.",
        ],
      },
      {
        CardHead: "The Hanged Man",
        CardInfo: [
          "THE HANGED MAN—Wisdom, trials, circumspection, discernment, sacrifice, intuition, divination, prophecy. ",
          "The Hanged Man, one of the most intriguing cards in the tarot deck, holds special significance when it comes to career choices. This enigmatic card encourages us to pause and reflect on the conventional notions of success and societal expectations. It urges us to let go of the familiar and venture into uncharted territory, embracing a fresh perspective that can lead to unexpected breakthroughs. In the realm of careers, the Hanged Man prompts us to reevaluate our goals and priorities, encouraging us to take a step back and gain a new understanding of our professional path. By suspending our old ways of thinking and embracing a more innovative approach, the Hanged Man teaches us that sometimes success can be found in the most unconventional of places.",
        ],
      },
    ],
  };

  const finances = {
    backdrop: HiddenCharmBackdrop,
    icon: HiddenCharmIcon,
    head: "Finances",
    p1: "Navigate foggy weeks with Tarot's illuminating wisdom.",
    p2: "Dive into clarity and discover your best curse of action.",
    cards: [
      {
        CardHead: "The Fool",
        CardInfo: [
          "THE FOOL—Taking a risk, A new beginning. Folly, mania, extravagance, intoxication, delirium, frenzy. The fool’s journey.",
          "Representing a fresh start and uncharted territory, this card urges you to approach your financial endeavors with innocence and curiosity. The Fool serves as a reminder to think outside the box and embrace opportunities that may seem unconventional or uncertain. While it may be tempting to adhere to caution, this card encourages taking calculated risks to achieve financial growth and prosperity. However, it can also serves as a cautionary symbol, urging us to avoid impulsive decisions and to consider long-term stability. Ultimately, The Fool reminds us that sometimes we must step into the abyss to find financial liberation and success.",
        ],
      },
      {
        CardHead: "The High Priestess",
        CardInfo: [
          "THE HIGH PRIESTESS—Secrets, mystery, the future as yet unrevealed, silence, wisdom. Divine feminine energy. Your subconscious mind is your best guide.",
          "The High Priestess reminds us that financial decisions are not only about practicality but also about trusting our instincts. She urges us to dive into the depths of our own intuition and listen to the whispers of our inner voice when it comes to money matters. This card encourages us to seek hidden opportunities, trust in our own abilities, and be patient in our financial endeavors. With The High Priestess by our side, we are guided to tap into our innate wisdom and make sound financial choices that align with our highest potential.",
        ],
      },
      {
        CardHead: "The Empress",
        CardInfo: [
          "THE EMPRESS—Fruitfulness, initiative. Mothering energy, embracing the qualities of nurturing and love. Connection to nature.",
          "The Empress is a powerful Tarot card that holds significant influence in the realm of finances. Symbolizing abundance, prosperity, and nurturing energy, The Empress Tarot card brings forth positive outcomes when it comes to monetary matters. This card encourages individuals to trust in their instincts, tap into their creativity, and make wise financial decisions. Just as The Empress represents fertility and growth, she signals a period of financial expansion and success. By embracing the generous and nurturing energy of The Empress, individuals can attract financial abundance and experience the rewards of their hard work and patience.",
        ],
      },
      {
        CardHead: "The Emperor",
        CardInfo: [
          "THE EMPEROR—Power and Authority. Stability and security in life. Protection, aid, a great person, conviction, reason.",
          "The Emperor in a Finances stands tall and commanding, symbolizing the power and authority one holds over their financial realm. His presence signifies a strong and structured approach to money matters, suggesting that now is a time to take control of your economic situation and make well-informed decisions. Just as the Emperor rules his empire with discipline and order, this card encourages you to establish a solid foundation and set clear financial goals. It reminds you to be organized, establish budgets, and strategies to ensure a prosperous future. With the Emperor's guidance, you are empowered to make wise choices, strengthen your financial position, and secure stability in this realm of life. Embrace his energy and lead your finances with confidence and authority.",
        ],
      },
      {
        CardHead: "The Hierophant",
        CardInfo: [
          "THE HIEROPHANT—Sprituality and higher education. Marriage alliance, captivity, servitude, mercy and goodness, inspiration.",
          "The Hierophant in Finances guides us towards a comforting sense of stability and structure when it comes to our financial matters. This tarot card reminds us to approach our money management with a wise and traditional mindset, seeking advice from experts or trusted mentors who can offer valuable insights. The Hierophant encourages us to stick to tried-and-true financial practices, such as setting a budget, saving for the future, and investing wisely. With the presence of this card, we are encouraged to prioritize financial education, seeking knowledge and understanding in order to make informed decisions. By aligning our finances with our values and beliefs, we can create a sense of harmony and abundance in our monetary realm. Overall, the Hierophant in Finances serves as a guiding light, offering wisdom and guidance as we navigate the complex world of money.",
        ],
      },
      {
        CardHead: "The Strength",
        CardInfo: [
          "STRENGTH—Power, energy, action, courage, magnanimity. ",
          "Strength for Finances and Career is an essential aspect of our lives, providing us with the power and resilience to navigate the challenges and ensure our prosperity. When we possess the strength to face financial hurdles, we can overcome obstacles with determination and fortitude. In the realm of career, strength empowers us to assert ourselves, seize opportunities, and make confident decisions that lead to professional success. Whether it's demonstrating the courage to negotiate a salary or the tenacity to persevere through setbacks, strength plays a crucial role in shaping our financial and career outcomes. Thus, harnessing strength enables us to break free from limitations, tap into our potential, and build a solid foundation for long-term stability and growth.",
        ],
      },
      {
        CardHead: "The Hermit",
        CardInfo: [
          "THE HERMIT—Looking Within. Introspection, soul searching, solitude.",
          "The Hermit is a powerful archetype that can have a significant impact when it comes to career and finances. As the name suggests, this card represents a period of solitude and introspection, where one must withdraw from the hustle and bustle of the outside world to focus on their own path. In the context of work, the presence of the Hermit suggests the need for introspection and self-reflection. It encourages you to take a step back from your current situation, reassess your goals, and evaluate whether you are on the right path. This card often signifies a time of personal growth and self-discovery, where you may find yourself seeking deeper meaning and purpose in your work. It encourages you to trust your instincts and listen to your inner voice when making important career decisions.In terms of finances, the Hermit reminds you of the importance of being financially independent and self-reliant. It encourages you to take a closer look at your spending habits and to prioritize your financial goals. This card suggests that you may need to make some temporary sacrifices in order to achieve long-term financial stability. It also emphasizes the importance of seeking out wise counsel and advice when it comes to managing your money. The Hermit reminds you that sometimes the best way to move forward financially is to step back, take stock of your resources, and plan your next moves carefully. It encourages you to be patient and disciplined in your approach to money management, knowing that it will ultimately lead to a brighter and more secure financial future.",
        ],
      },
      {
        CardHead: "The Wheel of Fortune",
        CardInfo: [
          "WHEEL OF FORTUNE—Destiny, fortune, success, luck, felicity. You must go with the flow of life.",
          "This card emphasizes the idea that no matter where we find ourselves financially, whether at the top or the bottom, the situation is temporary. It highlights the importance of enjoying and making the most of our good financial moments, while also staying resilient during challenging times, as things will eventually improve.",
        ],
      },
      {
        CardHead: "Death",
        CardInfo: [
          "DEATH—Endings, beginnings, change, mortality, destruction, corruption. ",
          "The Death tarot card, when in an upright position, signifies a significant loss in terms of your financial resources. It serves as a catalyst for a transformative journey, prompting you to reconsider your approach to money and reassess your values. This phase brings valuable lessons that have the potential to bring about practical changes in how you manage your resources. Moreover, it also imparts spiritual insights, allowing you to gain a deeper understanding of what truly holds importance in your life.",
        ],
      },
      {
        CardHead: "Temprance",
        CardInfo: [
          "TEMPERANCE—Economy, moderation, frugality, management, accommodation. ",
          "When it comes to managing our finances, the concept of temperance plays a crucial role. Temperance in finances entails finding a delicate equilibrium between our spending and saving habits, and ensuring that our financial decisions are guided by prudence and moderation. This virtuous tarot card encourages us to approach our financial affairs with a sense of patience and discipline, urging us to avoid excessive indulgence or reckless impulses. By exercising temperance in our financial endeavors, we can set ourselves on a path of stability and long-term abundance.",
        ],
      },
      {
        CardHead: "The Devil",
        CardInfo: [
          "THE DEVIL—Obsession, Materialism, Addiction.",
          "The Devil in finances serves as a stern reminder for individuals to exercise utmost discretion in both personal and business matters. This card cautions against impulsive decisions driven by materialistic desires and the temptation to take shortcuts. It urges individuals to resist the allure of excessive debt, dishonest financial practices, and unhealthy obsessions with wealth. The presence of The Devil suggests the need for discipline and self-control to avoid falling prey to financial traps. By acknowledging the potential dangers and exercising caution, one can navigate the realm of finances with prudence and emerge unscathed by the temptations lurking in the shadows.",
        ],
      },
    ],
  };
  const luck = {
    backdrop: LuckBackdrop,
    icon: LuckIcon,
    head: "How to change my luck?",
    p1: "Hold on tight. You're about to uncover some juicy intel about your destined partner!",
    p2: "Want a hint?Let the wisdom of Tarot guide you, my friend.",
    cards: [
      {
        CardHead: "Ace of Cups",
        CardInfo: [
          "Ace of Cups—Love, new relationship, friendship, joy, creativity. Awakening.",
          "The Ace of Cups has a positive message of new beginnings. You may be starting a new romantic relationship or making new friends. This is a fresh start. May indicate a pregnancy or childbirth.",
        ],
      },
      {
        CardHead: "Ace of Wands",
        CardInfo: [
          "Ace of Wands—New ideas, creativity, potential, success.",
          "This card brings inspiration and new creative ideas. You are connected to universal consciousness and this energy is flowing through you with powerful enthusiasm for creative projects and pursuits. You may recieve information regarding your soul path or feel compelled to start something new. This is a good time to begin a new pursuit.",
        ],
      },
      {
        CardHead: "Wheel of Fortune",
        CardInfo: [
          "Wheel of Fortune—Destiny, fortune, success, luck, felicity. You must go with the flow of life.",
          "This card emphasizes the idea that no matter where we find ourselves financially, whether at the top or the bottom, the situation is temporary. It highlights the importance of enjoying and making the most of our good financial moments, while also staying resilient during challenging times, as things will eventually improve.",
        ],
      },
      {
        CardHead: "Ace of Swords",
        CardInfo: [
          "Ace of Swords—Victory, progress, mental clarity, truth revealed.",
          "With this card a breakthrough in clarity is on the way. You will be able to make a strong decision about what step to take next. The insight to know will reveal life changing opportunities. You may experience a spiritual awakening. Tune into this wisdom and truth to take focused action. You will find you have the ability to overcome your obstacles and find resolve conflicts.",
        ],
      },
      {
        CardHead: "Three of Cups",
        CardInfo: [
          "Three of Cups—Celebration, friendships, family cooperation.",
          "This is a time of celebration with family and friends. Reach out for the support of others. Cherish and nurture your relationships. Enjoy the experience of connecting with others. There may be a new project or childbirth on the horizon.",
        ],
      },
      {
        CardHead: "Three of Wands",
        CardInfo: [
          "Three of Wands-Expansion, progress, foresight, moving in the right direction. ",
          "Your efforts are paying off. The development of your projects is speeding up. The momentum you created in the past will carry you forward. Keep working towards your goal, because you are headed in the right direction. Watch for the signs of success and know that your dreams are on their way.",
        ],
      },
      {
        CardHead: "Ace of Pentacles",
        CardInfo: [
          "Ace of Pentacles—Success, manifestation, security, prosperity.",
          "This is a time of financial gain. You have the ability to manifest whatever you desire. There are new opportunities for abundance and material well being. You may be purchasing a house or starting a new business. Also good physical health.",
        ],
      },
      {
        CardHead: "Two of Swords",
        CardInfo: [
          "Two of Swords—A stalemate or crossroads, choices, making a decision.",
          "It’s time to make a choice but you may be having a hard time deciding. Follow your intuition to find the best possible solution. Be willing to compromise and balance the needs of other people involved. You know the best way forward and when you act the path with reveal itself, moving you towards your dreams. ",
        ],
      },
      {
        CardHead: "Three of Swords",
        CardInfo: [
          "Three of Swords - Pain, sorrow, heartbreak, disappointment. ",
          "A shadowy time if grief and disillusionment. You may be experiencing unpleasant and unwanted outcomes. Accept the situation and avoid becoming trapped by negative thinking. Even in the midst of sorrow know that this too shall pass. This is an opportunity to grow stronger. Take time to heal and something better will emerge from this situation. You will soon find inspiration again.",
        ],
      },
      {
        CardHead: "Five of Wands",
        CardInfo: [
          "Five of Wands-Competition, teamwork, leveling up, being pushed by others to succeed.",
          "It is a time of rivalry and competition. This can be a good thing as it can push you to excel at the highest level possible. If you are experiencing conflict, take time to regroup so you can get on the same page as others. Dont let clashing egos slow you down. Together we can rise in harmony.",
        ],
      },
      {
        CardHead: "Four of swords",
        CardInfo: [
          "Four of swords—Deep rest, vacation, contemplation, healing, recovery.",
          "This is a time of deep rest in recovery of of a period of action. Take some time out to recover before making any big decisions. Self-care will lead to regeneration. It's a good time to practice meditation, journaling or energy healing. As you rejuvenate your life will shift into something more beautiful. This may also be a time of recovery from illness or injury. Slow down and take time to heal.",
        ],
      },
    ],
  };
  const hiddenCharm = {
    backdrop: HiddenCharmBackdrop,
    icon: HiddenCharmIcon,
    head: "My hidden charm",
    p1: "Navigate foggy weeks with Tarot's illuminating wisdom.",
    p2: "Dive into clarity and discover your best curse of action.",
    cards: [
      {
        CardHead: "Ace of Cups",
        CardInfo: [
          "Ace of Cups—Love, new relationship, friendship, joy, creativity. Awakening.",
          "The Ace of Cups has a positive message of new beginnings. You may be starting a new romantic relationship or making new friends. This is a fresh start. May indicate a pregnancy or childbirth.",
        ],
      },
      {
        CardHead: "Ace of Wands",
        CardInfo: [
          "Ace of Wands—New ideas, creativity, potential, success.",
          "This card brings inspiration and new creative ideas. You are connected to universal consciousness and this energy is flowing through you with powerful enthusiasm for creative projects and pursuits. You may recieve information regarding your soul path or feel compelled to start something new. This is a good time to begin a new pursuit.",
        ],
      },
      {
        CardHead: "Two of Cups",
        CardInfo: [
          "Two of Cups—Partnership, harmony, exchange of energy.",
          "The couple on the card each holds a cup. They share equally with each other. This partnership may be a romance, friendship or a business relationship. There is connection and good communication. Harmony with each other and general wellbeing. It may indicate an engagement.",
        ],
      },
      {
        CardHead: "Two of Wands",
        CardInfo: [
          "Two of Wands—Planning for the future, discovery, decision, new adventures.",
          "It’s time to make new plans for the future. To begin doing that thing you really want to do. If you can dream it and envision it then you can make it a reality. Take strides towards your goals. Whether it’s a new project or one that’s already underway, your efforts will be worthwhile.",
        ],
      },
      {
        CardHead: "Three of Cups",
        CardInfo: [
          "Three of Cups—Celebration, friendships, family cooperation.",
          "This is a time of celebration with family and friends. Reach out for the support of others. Cherish and nurture your relationships. Enjoy the experience of connecting with others. There may be a new project or childbirth on the horizon.",
        ],
      },
      {
        CardHead: "Three of Wands",
        CardInfo: [
          "Three of Wands-Expansion, progress, foresight, moving in the right direction. ",
          "Your efforts are paying off. The development of your projects is speeding up. The momentum you created in the past will carry you forward. Keep working towards your goal, because you are headed in the right direction. Watch for the signs of success and know that your dreams are on their way.",
        ],
      },
      {
        CardHead: "Four of Cups",
        CardInfo: [
          "Four of Cups—Contemplation, reevaluation, missed opportunities, not appreciating what you have, love after loss.",
          "There is a great abundance around you if you are open to receiving it. You want something more, may be feeling bored or distracted, but are missing out on what is right in front of you. Don't cut yourself off. Open up to the fullness and richness of your life. Remember that there is love all around you.",
        ],
      },
      {
        CardHead: "Four of Wands",
        CardInfo: [
          "Four of Wands—Celebration, harmony, attainment.",
          "You find satisfaction with your efforts and in your relationships. It’s time to enjoy your success and celebrate with others. It’s a time of productive collaboration and connecting with others. Happiness and harmony in community. This card may indicate a romance or marriage. ",
        ],
      },
      {
        CardHead: "Five of Cups",
        CardInfo: [
          "Five of Cups - Grief, mourning, sadness, loss, disappointment, regret, self-pity. ",
          "You are mourning the loss of something and unable to focus on the positive. There is regret or feelings of loss and disappointment. Remove yourself from negative situations. Dwelling on this for too long will block new opportunities.",
        ],
      },
      {
        CardHead: "Five of Wands",
        CardInfo: [
          "Five of Wands-Competition, teamwork, leveling up, being pushed by others to succeed.",
          "It is a time of rivalry and competition. This can be a good thing as it can push you to excel at the highest level possible. If you are experiencing conflict, take time to regroup so you can get on the same page as others. Dont let clashing egos slow you down. Together we can rise in harmony.",
        ],
      },
      {
        CardHead: "Six of Cups",
        CardInfo: [
          "Six of Cups—The past, reunions, nostalgia, childlike energy.",
          "Old memories Reminiscing about the past, old friends. Reconnect with your inner child and explore the world with a childlike sense of wonder. There may be a matter involving children. Someone from the past may enter back into your life.",
        ],
      },
    ],
  };
  const reverse = {
    backdrop: HiddenCharmBackdrop,
    icon: HiddenCharmIcon,
    head: "Reversed Tarot Cards",
    p1: "Navigate foggy weeks with Tarot's illuminating wisdom.",
    p2: "Dive into clarity and discover your best curse of action.",
    cards: [
      {
        CardHead: "Ace of Swords",
        CardInfo: [
          "Ace of Swords ~ Victory, progress, mental clarity, truth revealed",
          "Obstacles, poor judgement. You are not seeing things clearly at this time. Dishonesty, Loss and infertility.The Ace of Swords Reversed represents a shift in the flow of mental clarity and perception. When this card appears upside down, it suggests a struggle to find truth and make decisions with a clear mind. It indicates a sense of confusion and muddled thinking, leading to poor judgment and misunderstandings. The reversed Ace of Swords reminds us to be cautious with our thoughts and be aware of the potential for self-deception or manipulation from others. It is a call to take a step back, pause, and reassess our ideas and beliefs before moving forward. It serves as a reminder that true wisdom can only be achieved when we confront the fog within and seek clarity from within ourselves.",
        ],
      },
      {
        CardHead: "Two of Swords",
        CardInfo: [
          "Two of Swords ~ Poor choices, hasty decision making. Movement in the wrong direction.",
          "The Two of Swords Reversed suggests that poor choices and hasty decision-making are likely to lead to movement in the wrong direction. It serves as a reminder that impulsive actions can often result in unfavorable outcomes, urging us to carefully consider our options and approach situations with thoughtfulness and patience. By taking the time to weigh our choices and make deliberate decisions, we can avoid the pitfalls that come with rushing into action without considering the potential consequences.",
        ],
      },
      {
        CardHead: "3 of Swords ",
        CardInfo: [
          "The Three of Swords Reversed, appearing in a tarot reading, signifies a glimmer of hope amidst emotional turmoil and heartache. It suggests that the intense pain experienced may finally start to dissipate as healing begins to take place. This card urges us to face our emotional wounds head-on and embrace the process of letting go. It reminds us that by acknowledging our pain and working through it, we can eventually find solace and regain a sense of inner peace. While the journey may still have its challenges, the reversed Three of Swords offers a ray of light, guiding us towards a future where our hearts can mend and bloom once again.",
        ],
      },
      {
        CardHead: "Two of Wands",
        CardInfo: [
          "Two of Wands—Planning for the future, discovery, decision, new adventures.",
          "It’s time to make new plans for the future. To begin doing that thing you really want to do. If you can dream it and envision it then you can make it a reality. Take strides towards your goals. Whether it’s a new project or one that’s already underway, your efforts will be worthwhile.",
        ],
      },
      {
        CardHead: "Three of Cups",
        CardInfo: [
          "Three of Cups—Celebration, friendships, family cooperation.",
          "This is a time of celebration with family and friends. Reach out for the support of others. Cherish and nurture your relationships. Enjoy the experience of connecting with others. There may be a new project or childbirth on the horizon.",
        ],
      },
      {
        CardHead: "Three of Wands",
        CardInfo: [
          "Three of Wands-Expansion, progress, foresight, moving in the right direction. ",
          "Your efforts are paying off. The development of your projects is speeding up. The momentum you created in the past will carry you forward. Keep working towards your goal, because you are headed in the right direction. Watch for the signs of success and know that your dreams are on their way.",
        ],
      },
      {
        CardHead: "Four of Cups",
        CardInfo: [
          "Four of Cups—Contemplation, reevaluation, missed opportunities, not appreciating what you have, love after loss.",
          "There is a great abundance around you if you are open to receiving it. You want something more, may be feeling bored or distracted, but are missing out on what is right in front of you. Don't cut yourself off. Open up to the fullness and richness of your life. Remember that there is love all around you.",
        ],
      },
      {
        CardHead: "Four of Wands",
        CardInfo: [
          "Four of Wands—Celebration, harmony, attainment.",
          "You find satisfaction with your efforts and in your relationships. It’s time to enjoy your success and celebrate with others. It’s a time of productive collaboration and connecting with others. Happiness and harmony in community. This card may indicate a romance or marriage. ",
        ],
      },
      {
        CardHead: "Five of Cups",
        CardInfo: [
          "Five of Cups - Grief, mourning, sadness, loss, disappointment, regret, self-pity. ",
          "You are mourning the loss of something and unable to focus on the positive. There is regret or feelings of loss and disappointment. Remove yourself from negative situations. Dwelling on this for too long will block new opportunities.",
        ],
      },
      {
        CardHead: "Five of Wands",
        CardInfo: [
          "Five of Wands-Competition, teamwork, leveling up, being pushed by others to succeed.",
          "It is a time of rivalry and competition. This can be a good thing as it can push you to excel at the highest level possible. If you are experiencing conflict, take time to regroup so you can get on the same page as others. Dont let clashing egos slow you down. Together we can rise in harmony.",
        ],
      },
      {
        CardHead: "Six of Cups",
        CardInfo: [
          "Six of Cups—The past, reunions, nostalgia, childlike energy.",
          "Old memories Reminiscing about the past, old friends. Reconnect with your inner child and explore the world with a childlike sense of wonder. There may be a matter involving children. Someone from the past may enter back into your life.",
        ],
      },
      {
        CardHead: "Four of swords ",
        CardInfo: [
          "Four of Swords Reversed: Renewed activity and movement. ",
          "The 4 of Swords Reversed signifies a heightened sense of renewed activity and movement. After a period of rest and introspection, you are now ready to embrace the world with renewed energy and vigor. The stagnant energy that once held you back is dissipating, and you are now eager to dive into new challenges and ventures. This reversal of the card symbolizes breaking free from the restraints of inactivity, signaling a time of action and progress. It is a gentle reminder to pace yourself as you navigate this newfound surge of energy, ensuring that you strike a balance between rest and exertion. Embrace this renewed vitality and seize the opportunities that lie ahead for you.",
        ],
      },
      {
        CardHead: "Five of swords ",
        CardInfo: [
          "Five of Swords Reversed: Sorrow. Weakness.",
          "The Five of Swords Reversed signifies a deep well of sorrow and weakness. When this card appears inverted, it indicates the aftermath of a personal conflict that has left you feeling defeated and drained. The sorrow, whether it stems from a broken relationship, a failed endeavor, or a loss of some kind, can weigh heavily on your spirit. In this state of vulnerability, it is important to acknowledge your emotions and give yourself the time and space to heal. Take solace in the fact that sorrow and weakness are temporary states that can eventually be overcome with self-care, resilience, and the support of loved ones.",
        ],
      },
      {
        CardHead: "Six of swords ",
        CardInfo: [
          "Six of Swords Reversed: You will stay where you are. There is no way out of present difficulties.  ",
          "The Six of Swords Reversed embodies a sense of stagnation and resistance to change. It signifies a period of prolonged journey or transition, where the individual may find themselves stuck in old patterns and unable to move forward. This card suggests that there may be emotional baggage or unresolved issues that hinder progress and prevent the necessary healing and growth to take place. It serves as a reminder to confront these obstacles head-on, address the underlying fears or traumas, and seek the guidance and support needed to finally navigate through the turbulent waters towards calmer shores.",
        ],
      },
      {
        CardHead: "Seven of swords ",
        CardInfo: [
          "Seven of Swords Reversed: Possibility of unexpected good. Sound advice. Instruction. Wishes about to be fulfilled.  ",
          "The appearance of the Seven of Swords reversed suggests that the deceitful actions or questionable intentions of someone around you have been exposed. It indicates a shift in power dynamics as secrets are revealed and hidden agendas are uncovered. This reversal can bring about a sense of justice and transparency, allowing you to regain control and protect yourself from further harm. It serves as a reminder to stay vigilant, to be wary of those who may try to manipulate or deceive you, and to trust your instincts. ",
        ],
      },
      {
        CardHead: "Eight of swords ",
        CardInfo: [
          "Eight of swords Reversed ~ New beginnings are possible. Free of fear. ",
          "The 8 of Swords Reversed represents a release from the entrapment and self-imposed limitations that once plagued us. When this card appears reversed, it signifies newfound clarity, liberation, and the ability to break free from mental barriers. The negative thoughts and fears that once held us captive are now dissipating, giving way to a renewed sense of empowerment and freedom. The reversed 8 of Swords reminds us that we have the power to overcome our self-imposed restrictions and embrace a life filled with possibilities and growth. It encourages us to step out of our comfort zones and explore new horizons, knowing that we can navigate any challenges that come our way.",
        ],
      },
      {
        CardHead: "Nine of swords ",
        CardInfo: [
          "Nine of swords Reversed ~ Patience, Healing, Looking forward to the future.",
          "The Nine of Swords Reversed depicts a significant release of anxiety and torment that has plagued one's mind for some time. In this overturned position, the weight of fearful thoughts and nightmares begins to dissipate, allowing a glimmer of hope to emerge. The individual may have recently confronted their fears head-on, finding the courage to address their deepest worries and inner demons. This card signifies a turning point, where a newfound sense of peace washes away the relentless mental anguish. The reversal encourages the seeker to embrace a calmer state of mind, releasing themselves from the grip of insomnia and racing thoughts. It reminds them that they possess the strength to overcome their internal struggles and can now embark on a path of healing and emotional renewal.",
        ],
      },
      {
        CardHead: "Ten of swords ",
        CardInfo: [
          "Ten of Swords Reversed ~ Success and profit. Courage. Seeking help from higher powers.",
          "The Ten of Swords Reversed indicates that the worst is finally over, and the time for healing and recovery has arrived. This card represents resilience and the ability to rise above challenging circumstances. It suggests that you have reached the point of letting go of past hurts, disappointments, and betrayals. While there may still be some lingering pain, the reversal signifies that you are now on the path to healing and moving forward.",
        ],
      },
      {
        CardHead: "Page of swords ",
        CardInfo: [
          "Page of Swords Reversed ~ Indicates that an impostor will soon be exposed, revealing their true intentions and deceptive nature.",
          " In addition, this card suggests that ill health may be on the horizon, reminding us to prioritize self-care and take necessary precautions. With this knowledge, we should brace ourselves for the unexpected twists and turns that may come our way, staying vigilant and adaptable as we navigate through life's challenges.",
        ],
      },
    ],
  };
  const feel = {
    backdrop: HiddenCharmBackdrop,
    icon: HiddenCharmIcon,
    head: "How do you feel about yourself",
    p1: "Navigate foggy weeks with Tarot's illuminating wisdom.",
    p2: "Dive into clarity and discover your best curse of action.",
    cards: [
      {
        CardHead:
          "Ace of Swords ~ Victory, progress, mental clarity, truth revealed",
        CardInfo: [
          "Ace of Swords ~ Victory, progress, mental clarity, truth revealed ~ Victory, progress, mental clarity, truth revealed",
          "The Ace of Swords is also a card of truth and honesty. It suggests that you have the opportunity to see things as they truly are, free from illusions or self-deception. This card calls for integrity and encourages you to communicate with honesty and assertiveness. It may also indicate a time of seeking justice or standing up for what is right and fair.",
        ],
      },
      {
        CardHead: "Two of Swords",
        CardInfo: [
          "Two of Swords ~ A stalemate or crossroads, choices, making a decision.",
          " Two of Swords suggests a state of emotional distance or an inability to communicate openly. There may be unresolved conflicts or unspoken issues that are causing a sense of disconnect. It calls for honest communication, a willingness to confront challenges, and a commitment to finding a resolution.",
        ],
      },
      {
        CardHead: "3 of Swords ",
        CardInfo: [
          "3 of Swords ~ Pain, sorrow, heartbreak, disappointment. ",
          "The Three of Swords is an emotionally charged card that holds a deep meaning within the Tarot deck. Depicted by three piercing swords crossing one another, it signifies heartbreak, sadness, and disappointment. This card reminds us that pain is an inevitable part of life, and it serves as a stark reminder to confront our deepest sorrows. It represents a period of mourning and healing, urging us to acknowledge and process our emotional wounds. Despite its somber implications, the Three of Swords also offers a glimmer of hope, encouraging us to find resilience and growth amidst adversity. It teaches us the importance of emotional self-care and reminds us that even in the darkest times, there is always a path to recovery.",
        ],
      },
      {
        CardHead: "Four of swords ",
        CardInfo: [
          "Four of swords ~ Deep rest, vacation, contemplation, healing, recovery. ",
          "When this card appears, it advises us to set boundaries and establish healthy routines that prioritize our well-being. Perhaps it is time to disconnect from social media, limit work hours, or take a vacation. These actions may awaken our awareness of the importance of rest and foster a greater sense of stability and peace in our lives.",
        ],
      },
      {
        CardHead: "Five of swords ",
        CardInfo: [
          "Five of Swords ~ Conflict, tension, loss, change in perspective. ",
          "The Five of Swords is a card that brings forth an air of conflict and tension. It depicts a scene of a person standing victoriously while others appear defeated and disheartened. This card signifies moments of disharmony, power struggles, and even deceit. It serves as a reminder that not all battles are worth fighting, and victory at the expense of others' dignity may lead to a hollow triumph. The Five of Swords urges us to evaluate our actions and motivations, reminding us that true strength lies in finding common ground and resolving conflicts peacefully rather than solely aiming for personal gain.",
        ],
      },

      {
        CardHead: "Seven of swords ",
        CardInfo: [
          "Seven of Swords ~ Self confidence, being grateful, strength, cunning, strategy, utilizing the resources you have.",
          "When the Seven of Swords presents itself, it serves as a reminder to tread cautiously in our interactions with others. There may be individuals who harbor ulterior motives, hidden motives that don't align with our own best interests. Whether it's a colleague, a friend, or even a romantic partner, we must remain vigilant, looking beyond the surface to uncover their intentions.",
        ],
      },
      {
        CardHead: "Eight of swords ",
        CardInfo: [
          "Eight of swords ~ Blind trust, constraint, feeling stuck.",
          "The Eight of Swords is a card that embodies feelings of entrapment and restriction. In this card, we see a woman blindfolded and bound, surrounded by eight swords that surround her on all sides. The image suggests a sense of being stuck and unable to move forward. However, upon closer examination, we notice that the swords do not actually touch the woman, revealing that the limitations she feels are primarily self-imposed. ",
        ],
      },
      {
        CardHead: "Nine of swords ",
        CardInfo: [
          "Nine of Swords ~ Nightmares, fear, anxiety, worry, stress.",
          "The Nine of Swords carries a meaning that speaks of anxiety, fear, and worry. Depicted by a figure sitting up in bed, their head cradled in their hands, this card conveys the torment of a restless mind overwhelmed by negative thoughts. It serves as a warning that excessive rumination and self-doubt are taking a toll on mental well-being. It urges the seeker to recognize the power their thoughts hold over them and to seek ways to calm the mind and find solace. Although it is a disheartening card, the Nine of Swords offers an opportunity for self-reflection and the chance to address the root causes of one's distress, ultimately leading to personal growth and emotional liberation.",
        ],
      },
      {
        CardHead: "Ten of swords ",
        CardInfo: [
          "Ten of Swords ~ End of the situation, peace, finality, moving on.",
          "The Ten of Swords depicts a figure lying on the ground with ten swords piercing their back, it represents the end of a challenging and painful cycle. It may indicate a situation of betrayal, defeat, or a complete breakdown. However, this card also carries an important lesson – the worst is over, and it can only go upward from here. It is a reminder to release the burdens of the past and embrace the opportunity for transformation and rebirth. The Ten of Swords urges us to let go of negative influences, let wounds heal, and rise above adversity with newfound strength and resilience.",
        ],
      },
      {
        CardHead: "Page of swords ",
        CardInfo: [
          "Page of Swords ~ Intelligence, curiosity, thirst for knowledge, truth.",
          "The Page of Swords, with his sharp intellect and insatiable curiosity, serves as a powerful symbol of the innate human pursuit of knowledge and the unyielding thirst for continuous learning. It portrays a figure who eagerly dives into unfamiliar territories, wielding his sword of wisdom as he fearlessly uncovers new truths and explores uncharted realms of understanding. With each step taken along this intellectual journey, the Page of Swords reminds us of the immense power held within the desire to expand our minds and embrace the wonders that await us on the path of enlightenment.",
        ],
      },
    ],
  };
  const life = {
    backdrop: HiddenCharmBackdrop,
    icon: HiddenCharmIcon,
    head: "Life Lessons",
    p1: "Navigate foggy weeks with Tarot's illuminating wisdom.",
    p2: "Dive into clarity and discover your best curse of action.",
    cards: [
      {
        CardHead: "Ace of Swords",
        CardInfo: [
          "Ace of Swords ~ Victory, progress, mental clarity, truth revealed",
          "When the Ace of Swords appears in a tarot reading, it often signifies a fresh start or a new idea that has the potential to bring about significant change in your life. It represents the spark of inspiration and the emergence of a new perspective or understanding. This card encourages you to embrace your mental prowess, logic, and analytical abilities to cut through confusion, gain clarity, and find innovative solutions to any challenges you may be facing.",
        ],
      },
      {
        CardHead: "Two of Swords",
        CardInfo: [
          "Two of Swords ~ A stalemate or crossroads, choices, making a decision.",
          "When the Two of Swords appears in a tarot reading, it often suggests that you are facing a situation where you feel stuck or torn between two opposing choices or perspectives. You may be experiencing a state of mental or emotional deadlock, finding it difficult to make a decision or move forward. The blindfold in the card represents a reluctance to confront the truth or face the reality of the situation.",
        ],
      },
      {
        CardHead: "3 of Swords ",
        CardInfo: [
          "3 of Swords ~ Pain, sorrow, heartbreak, disappointment. ",
          "The Three of Swords brings forth a bittersweet energy. The imagery of three swords piercing through a heart symbolizes the pain and hurt that often accompanies the process of healing and growth. It reminds us that sometimes we must face difficult emotions head-on in order to find true resolution. Today, you may be confronted with a painful truth or a betrayal that cuts deep. While this can be daunting, it is important to remember that the Three of Swords also carries a message of clarity and release. Embrace the discomfort and allow yourself to process your emotions. Through facing this pain, you have the opportunity to let go of old wounds, paving the way for renewed strength and resilience.",
        ],
      },
      {
        CardHead: "Four of swords ",
        CardInfo: [
          "Four of swords ~ Deep rest, vacation, contemplation, healing, recovery. ",
          "The energy emitted by this card encourages us to create a sanctuary within ourselves, devoid of external disturbances and distractions. It is a time to unplug, put our worries aside, and allow our minds and bodies to replenish their vitality. In this haven of serenity, we can cultivate mental clarity, find solace, and tap into our inner strength.",
        ],
      },
      {
        CardHead: "Five of swords ",
        CardInfo: [
          "Five of Swords ~ Conflict, tension, loss, change in perspective. ",
          "When this card appears in a reading, it serves as a reminder that winning at all costs can sometimes leave a bitter taste in our mouths. It suggests that engaging in battle solely for the sake of personal gain or ego can ultimately lead to loneliness and alienation. The Five of Swords urges us to question our motivations and the methods we employ to achieve our goals.",
        ],
      },
      {
        CardHead: "Six of swords ",
        CardInfo: [
          "Six of Swords ~ Improvement, end of difficult times, healing, moving on. Transition. ",
          "When it comes to matters of the heart, the appearance of the Six of Swords suggests that you are currently going through a period of transition and moving towards a more peaceful and harmonious relationship.",
        ],
      },
      {
        CardHead: "Seven of swords ",
        CardInfo: [
          "Seven of Swords ~ Self confidence, being grateful, strength, cunning, strategy, utilizing the resources you have.",
          "This card encourages us to evaluate the situations in our lives more critically. Are there any signs of manipulation or deceit? Perhaps someone is attempting to undermine our efforts or withhold vital information. The appearance of the Seven of Swords advises us to trust our intuition and rely on our keen observation skills to unveil the truth that lies beneath the false facade.",
        ],
      },
      {
        CardHead: "Eight of swords ",
        CardInfo: [
          "Eight of swords ~ Blind trust, constraint, feeling stuck.",
          "It encourages us to recognize that we possess the power to break free from these mental constraints and find a way forward. The 8 of Swords challenges us to confront our fears and self-imposed limitations, offering the opportunity for personal growth and liberation if we are willing to face our inner demons and embrace our innate strength and potential.",
        ],
      },
      {
        CardHead: "Nine of swords ",
        CardInfo: [
          "Nine of Swords ~ Nightmares, fear, anxiety, worry, stress.",
          "Nine of Swords, presents us with an opportunity to confront our deepest fears. As we wake up with this card in our minds, it serves as a timely reminder to acknowledge and tackle the underlying anxieties that may be holding us back. It reminds us that it is only by shining a light on our fears that we can begin to understand and ultimately heal ourselves. Though it may be uncomfortable and unsettling, embracing the energy of the Nine of Swords empowers us to reclaim control over our thoughts and emotions. By choosing to confront the shadows that haunt us, we take the first step towards a path of self-growth and liberation.",
        ],
      },
      {
        CardHead: "Ten of swords ",
        CardInfo: [
          "Ten of Swords ~ End of the situation, peace, finality, moving on.",
          " It serves as a powerful reminder that endings can pave the way for new beginnings. Symbolizing a sense of betrayal or being overwhelmed by life's challenges, it may seem foreboding at first glance. However, take solace in the fact that this is the rock bottom from which you can only rise. Embrace the pain and harness it as fuel for growth and transformation. The Ten of Swords calls upon you to release what no longer serves you, allowing space for renewal, healing, and a fresh start. Remember, even in the darkest hour, there is always a glimmer of hope on the horizon.",
        ],
      },
      {
        CardHead: "Page of swords ",
        CardInfo: [
          "Page of Swords ~ Intelligence, curiosity, thirst for knowledge, truth.",
          "This card often encourages one to approach situations with a sharp mind, as it carries messages of critical thinking, analysis, and logical reasoning. It warns against hasty actions and reminds us to use caution, as the sharp double-edged sword can cut both ways. The appearance of the Page of Swords in a reading suggests the need to embrace our inner truth, speak our minds, and fearlessly confront any obstacles that stand in our way. It serves as a reminder that wisdom and power can be found within, encouraging us to harness our intellectual abilities and tackle challenges head-on. ",
        ],
      },
    ],
  };
  const Clarity = {
    backdrop: HiddenCharmBackdrop,
    icon: HiddenCharmIcon,
    head: "Life Clarity",
    p1: "Navigate foggy weeks with Tarot's illuminating wisdom.",
    p2: "Dive into clarity and discover your best curse of action.",
    cards: [
      {
        CardHead: "Ace of Swords",
        CardInfo: [
          "Ace of Swords ~ Victory, progress, mental clarity, truth revealed",
          "Ace of Swords is a card that signifies the potential for breakthroughs, mental clarity, and the power of truth. It encourages you to embrace new ideas, trust your intellectual abilities, and use your mind to overcome obstacles and achieve your goals. This card invites you to harness the power of your thoughts and embrace the transformative potential that lies within you.",
        ],
      },
      {
        CardHead: "Two of Swords",
        CardInfo: [
          "Two of Swords ~ A stalemate or crossroads, choices, making a decision.",
          "This card calls for you to acknowledge the need for clarity and resolution. It encourages you to remove the blindfold and honestly assess the situation at hand. It may be necessary to weigh the pros and cons of different options, gather more information, or seek guidance from others to help you make an informed decision. The crossed swords symbolize the need to find a balance between opposing forces and find a way to reconcile conflicting aspects.",
        ],
      },
      {
        CardHead: "Five of swords ",
        CardInfo: [
          "Five of Swords ~ Conflict, tension, loss, change in perspective. ",
          "Five of Swords reminds us that true triumph lies beyond mere personal gain. It advises us to seek win-win outcomes, where everyone involved benefits. By fostering understanding, empathy, and fairness, we can create a world where success is shared, and conflicts are transformed into opportunities for everyone involved.",
        ],
      },

      {
        CardHead: "Four of swords ",
        CardInfo: [
          "Four of swords ~ Deep rest, vacation, contemplation, healing, recovery. ",
          "When the 4 of Swords appears in a reading, it suggests that we may have been pushing ourselves too hard or experiencing overwhelming mental and emotional exhaustion. It invites us to prioritize self-care and seek refuge in moments of stillness. This card reassures us that rest is not a sign of weakness but rather an essential part of the process to restore our energy and regain clarity.",
        ],
      },
      {
        CardHead: "Six of swords ",
        CardInfo: [
          "Six of Swords ~ Improvement, end of difficult times, healing, moving on. Transition. ",
          "The 6 of Swords emerges from the Tarot deck, bringing with it a sense of calm and transition. As we embark on this journey, we find solace in leaving behind turbulent waters and moving towards a more peaceful horizon. The image of the boat slowly gliding across the steady river symbolizes the passage from one phase of life to another, offering us the opportunity to heal, reflect, and gather our strength. This card invites us to embrace the subtle winds of change and trust that better days lie ahead. With every stroke of the oar, we let go of the past and set sail towards a brighter future, guided by the wisdom gained from our previous experiences. It is a reminder that even in times of uncertainty, we can find peace by choosing to move forward.",
        ],
      },

      {
        CardHead: "Eight of swords ",
        CardInfo: [
          "Eight of swords ~ Blind trust, constraint, feeling stuck.",
          "The Eight of Swords reminds us that the power to break free from our own mental boundaries lies within us. It calls us to examine our fears and self-limiting beliefs, encouraging us to find the courage to take off the blindfold, untie the bonds, and embrace the freedom that is waiting just beyond our self-imposed constraints. It serves as a reminder that often, our greatest obstacles are created by our own minds.",
        ],
      },

      {
        CardHead: "Ten of swords ",
        CardInfo: [
          "Ten of Swords ~ End of the situation, peace, finality, moving on.",
          "The Ten of Swords depicts a figure lying on the ground with ten swords piercing their back, it represents the end of a challenging and painful cycle. It may indicate a situation of betrayal, defeat, or a complete breakdown. However, this card also carries an important lesson – the worst is over, and it can only go upward from here. It is a reminder to release the burdens of the past and embrace the opportunity for transformation and rebirth. The Ten of Swords urges us to let go of negative influences, let wounds heal, and rise above adversity with newfound strength and resilience.",
        ],
      },
      {
        CardHead: "Page of swords ",
        CardInfo: [
          "Page of Swords ~ Intelligence, curiosity, thirst for knowledge, truth.",
          "The Page of Swords, with his sharp intellect and insatiable curiosity, serves as a powerful symbol of the innate human pursuit of knowledge and the unyielding thirst for continuous learning. It portrays a figure who eagerly dives into unfamiliar territories, wielding his sword of wisdom as he fearlessly uncovers new truths and explores uncharted realms of understanding. With each step taken along this intellectual journey, the Page of Swords reminds us of the immense power held within the desire to expand our minds and embrace the wonders that await us on the path of enlightenment.",
        ],
      },
    ],
  };

  return (
    <div className="Main-Tarot">
      <div className="Tarot-Heading">
        <h1>Tarot Reading</h1>
      </div>
      <div className="Tarot-Cards">
        <TarotCards props={Daily} />
        <TarotCards props={Weekend} />
        <TarotCards props={Weekly} />
        <TarotCards props={Partner} />
        <TarotCards props={Career} />
        <TarotCards props={finances} />
        <TarotCards props={luck} />
        <TarotCards props={hiddenCharm} />
        <TarotCards props={Clarity} />
        <TarotCards props={life} />
        <TarotCards props={feel} />
        <TarotCards props={reverse} />
      </div>
    </div>
  );
};

export default TarotReading;
