const { ShardingManager } = require('discord.js');
const rawshards = process.env.SHARDS;
const shards = parseInt(rawshards, 10);
const manager = new ShardingManager('./bot.js', { totalShards: shards });

manager.spawn();
manager.on('shardCreate', shard => console.log(`Launched shard ${shard.id}`));
manager.on('shardCreate', shard => if (shards - shard === 0) console.log('Ready! (all shards are spawned)'));
