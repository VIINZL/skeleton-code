const { ShardingManager } = require('discord.js');
const manager = new ShardingManager('./bot.js');
manager.options.totalShards = '23';
manager.spawn();
manager.on('shardCreate', shard => console.log(`Launched shard ${shard.id}`));
