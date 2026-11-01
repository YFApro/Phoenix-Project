export function addCoins(player, amount) {

    player.coins += amount;

    return player;

}

export function spendCoins(player, amount) {

    if (player.coins < amount) return false;

    player.coins -= amount;

    return true;

}

export function hasEnoughCoins(player, amount) {

    return player.coins >= amount;

}