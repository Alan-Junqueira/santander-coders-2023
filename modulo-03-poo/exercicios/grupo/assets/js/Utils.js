export class Utils {
    static getRandomNumber(minValue, maxValue) {
        return Math.random() * (maxValue - minValue) + minValue;
    }

    static getRandomKey(isPositive, minGood, maxGood, minBad, maxBad) {
        return isPositive
            ? Utils.getRandomNumber(minGood, maxGood)
            : Utils.getRandomNumber(minBad, maxBad);
    }
}