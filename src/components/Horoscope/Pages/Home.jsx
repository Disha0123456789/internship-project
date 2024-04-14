import React, { useState } from 'react';
import Content from './Content';

export default function Gemini() {
    const params = new URLSearchParams(document.location.search);
    const user = params.get("rasi")
    const [left,setLeft]=useState(false)
    const [middle,setMiddle]=useState(true)
    const [right,setRight]=useState(false)

    const yesterdayContent='Zodiac symbol and planet - Crab is symbol of Cancer zodiac. Symbolized as crab gives mystic behavior, sensitivity and impatience. Just like a crab, native never leaves the enemies or friends. The Moon has power to rule over Cancer. The Moon makes native as moody and romantic. Generally, mother is related to the Moon, therefore a Cancer person can be highly attached to the mother.Lucky days, dates and numbers - The planet Moons Monday is lucky one for Cancer people. The number 2 is considered the number of the Moon in astrology and numerology. So, 2, 11, 20, 29 are lucky dates and numbers for Cancer.Wearable lucky things & direction - The Moons gemstone, pearl is lucky enough, if worn on the little finger. The silver metal and white color fall under the authority of the Moon. Its also compatible with this sign. North direction deems good enough for the zodiac. North direction should be taken from birth place.Lord deity and lucky Mantra - Lord Shiva and goddess Saraswati are considered the deities of the Moon. Cancer person should worship them for better fortune. Mantras of these deities and Moons chant can be beneficial also.Behavior and merits - Cancer zodiac has gentle or Satoguni behavior, meaning a good person with calm personalities. The merits are as female literate or Brahmin, it means native may have feminine behavior, but native can be highly skilled and over-sensitive person.Form and element - Cancer sign has movable or Char form. It means, native can succeed in any type of job or business. Element water gives the ability to adjust and control any situation smartly..'
    
    const todayContent='Work Hard- Putting effort into your goals and endeavors often leads to better outcomes,Stay Positive Maintaining- a positive outlook can help you navigate challenges more effectively,Adaptability -Being flexible and open to change can help you cope with unexpected situations,Continuous Learning -Embrace opportunities to learn and grow, as knowledge and skills can empower you to overcome obstacles,Relationships- Cultivate and maintain healthy relationships with family, friends, and colleagues, as they can provide support and guidance.'
    const tommarowContent='Zodiac symbol and planet - Pisces symbol is a fish. It simply means, a person of shy, over sensitive, susceptible nature. The lord planet Jupiter gives the attributes of knowledge, spirituality, artistic nature.Lucky days, dates and numbers - Jupiter rules over Thursday, so its considered the fortunate day for Pisces. Another lucky day is Sunday. Jupiter rules over number 3 in numerology as well as in astrology. So, the number and dates of 3, 12, 21, 30 remain the most luckiest.Wearable fortunate charm & direction - A yellow topaz on the index finger known as a fortunate charm for Pisces. Golden jewelry and yellow color are lucky also. Astrology suggests the North directiori as the lucky one for Pisces.Lord deity and lucky Mantra - Vishnu is known for a fish incarnation called Matsya Avatar. God Vishnu is the compatible deity for Pisces. Brhaspati mantra and Vishnu prayers remain good for the native.Behavior and merits - Pisces has a gentle and Satoguni nature, meaning a polite, peaceful and helpful person. Pisces has female literate merit, which means a knowledgeable and skilled person.Form and element - Dual nature is the form of Pisces, which is also known as Dwi-Swabhav Rashi, So, it is difficult to understand Pisces. The element water gives them the qualities of easygoing, helpful and forceful nature..'
    
    const handleClick = (value) => {
        if (value === 'left') {
            setLeft(true);
            setMiddle(false);
            setRight(false);
        } else if (value === 'middle') {
            setLeft(false);
            setMiddle(true);
            setRight(false);
        } else {
            setLeft(false);
            setMiddle(false);
            setRight(true);
        }
    };
    
    const getButtonStyle = (isActive) => ({
        backgroundColor: isActive ? '#fcceca' : 'transparent',
        color: isActive ? 'black' : 'gray',
    });
    
    return (
        <div className='Gemini-card'>
            <div style={{ height: '30px', display: 'flex', justifyContent: 'center' }}>
                <span style={{ fontSize: '20px', marginBottom: '20px' }}>{user}</span>
            </div>
    
            <hr className='Gemini-Hori_line' style={{ margin: '42px 40px 22px 35px', display: 'flex', alignItems: 'center' }} />
    
            <div className='Gemini-Box'>
                <div className='Gemini-1' onClick={() => handleClick('left')} style={{ ...getButtonStyle(left), height: "30px", display: 'flex', justifyContent: 'center' }}>
                    <span style={{ cursor: "pointer", margin: '' }}>Yesterday</span>
                </div>
                <div className='Gemini-2' onClick={() => handleClick('middle')} style={{ ...getButtonStyle(middle), height: "30px", display: 'flex', justifyContent: 'center' }}>
                    <span style={{ cursor: "pointer", margin: '' }}>Today</span>
                </div>
                <div className='Gemini-3' onClick={() => handleClick('right')} style={{ ...getButtonStyle(right), height: "30px", display: 'flex', justifyContent: 'center' }}>
                    <span style={{ cursor: "pointer", margin: '' }}>Tomorrow</span>
                </div>
            </div>
            <div className='Content-Box' style={{ marginTop: '22px' }}>
                {left && <Content content={yesterdayContent} />}
                {middle && <Content content={todayContent} />}
                {right && <Content content={tommarowContent} />}
            </div>
        </div>
    );
}
