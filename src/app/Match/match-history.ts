export interface FellowPlayer {
    summonerId: number;
    teamId: number;
    championId: number;
}

export interface Stats {
    level: number;
    goldEarned: number;
    numDeaths: number;
    turretsKilled: number;
    minionsKilled: number;
    championsKilled: number;
    goldSpent: number;
    totalDamageDealt: number;
    totalDamageTaken: number;
    killingSprees: number;
    largestKillingSpree: number;
    team: number;
    win: boolean;
    neutralMinionsKilled: number;
    largestMultiKill: number;
    physicalDamageDealtPlayer: number;
    magicDamageDealtPlayer: number;
    physicalDamageTaken: number;
    magicDamageTaken: number;
    timePlayed: number;
    totalHeal: number;
    totalUnitsHealed: number;
    assists: number;
    item0: number;
    item1: number;
    item2: number;
    item3: number;
    item4: number;
    item5: number;
    item6: number;
    magicDamageDealtToChampions: number;
    physicalDamageDealtToChampions: number;
    totalDamageDealtToChampions: number;
    trueDamageDealtPlayer: number;
    trueDamageDealtToChampions: number;
    trueDamageTaken: number;
    wardKilled: number;
    wardPlaced: number;
    neutralMinionsKilledEnemyJungle: number;
    neutralMinionsKilledYourJungle: number;
    totalTimeCrowdControlDealt: number;
    playerPosition: number;
    totalDamageDealtToBuildings: number;
    visionWardsBought: number;
    playerRole?: number;
    barracksKilled?: number;
    doubleKills?: number;
    tripleKills?: number;
    quadraKills?: number;
    bountyLevel?: number;
    largestCriticalStrike?: number;
}

export interface Game {
    gameId: any;
    invalid: boolean;
    gameMode: string;
    gameType: string;
    subType: string;
    mapId: number;
    teamId: number;
    championId: number;
    spell1: number;
    spell2: number;
    level: number;
    ipEarned: number;
    createDate: any;
    fellowPlayers: FellowPlayer[];
    stats: Stats;
}

export interface MatchHistoryRootObject {
    summonerId: number;
    games: Game[];
}