class Util {
    /**
     *
     * @param d1 {Date}
     * @param d2 {Date}
     */
    static getDaysBetween(d1,d2) {
        const t1 = d1.getTime();
        const t2 = d2.getTime();
        return Math.round((Math.abs(t1 - t2)) / (1000 * 3600 * 24));
    }
}

export default Util;