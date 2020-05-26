const { ShardingManager } = require('discord.js');
let shards = process.env.SHARDS;
let shards = parseInt(shards, 10);
const manager = new ShardingManager('./bot.js', { totalShards: shards });

manager.spawn();
manager.on('shardCreate', shard => console.log(`Launched shard ${shard.id}`));
