const { ShardingManager } = require('discord.js');
const rawshards = process.env.SHARDS;
const shards = parseInt(rawshards, 10);
const manager = new ShardingManager('./bot.js', { totalShards: shards } { shardList: [0, 1]});

function checkShards(shard, shards) {
  if (shards - shard.id === 0) {
    console.log('Ready! (all shards have been spawned)');
  };
};

manager.spawn();
manager.on('shardCreate', shard => console.log(`Launched shard ${shard.id}`));
manager.on('shardCreate', shard => checkShards(shard, shards));
