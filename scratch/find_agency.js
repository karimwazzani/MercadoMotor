const { PrismaClient } = require('../prisma/generated/client');
const prisma = new PrismaClient();

async function main() {
  const users = await prisma.user.findMany({
    include: { agencies: true }
  });
  
  const targetUser = users.find(u => u.id.replace(/-/g, '').substring(0, 8).toUpperCase() === '106E8FD7');
  
  if (!targetUser) {
    console.log('User not found');
    return;
  }
  
  if (!targetUser.agencies || targetUser.agencies.length === 0) {
    console.log('Agency not found for user:', targetUser.email);
    return;
  }

  console.log('FOUND:', JSON.stringify({
    userId: targetUser.id,
    email: targetUser.email,
    agencyId: targetUser.agencies[0].id
  }));
}

main();
