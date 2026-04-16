// Replace with actual userId and badgeId
// Paste this into your roblox console but remember to change the userId and badgeIds
const userId = 123456789; 
const badgeId = 987654321;

async function getBadgeAwardDate(userId, badgeId) {
  try {
    const response = await fetch(
      `https://badges.roblox.com/v1/users/${userId}/badges/awarded-dates?badgeIds=${badgeId}`
    );
    if (!response.ok) {
      throw new Error('Failed to fetch badge awarded date');
    }
    
    const data = await response.json();
    const badgeAward = data.data.find(badge => badge.badgeId === badgeId);

    if (badgeAward && badgeAward.awardedDate) {
      const awardedDate = new Date(badgeAward.awardedDate);
      console.log(`Badge awarded on: ${awardedDate.toLocaleString()}`);
    } else {
      console.log('Badge has not been awarded yet or no award date found.');
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

clear(); // Clears console cuz its messy
getBadgeAwardDate(userId, badgeId);
