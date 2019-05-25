package com.pu.carrent.Util;

import java.util.Random;

public class RandomUtil {

    public static String getRandom() {
        StringBuilder builder = new StringBuilder();
        for (int i = 0; i < 4; i++) {
            String str = "0123456789";
            char ch= str.charAt(new Random().nextInt(str.length()));
            builder.append(ch);
        }
        return builder.toString();
    }
}
