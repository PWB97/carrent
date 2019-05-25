package com.pu.carrent.Util;

public class ShortContentUtil {

    public static String shorContent(String content) {
        if (content == null) {
            return "";
        }
        String  str  = content.replaceAll("</?[^>]+>", "")
                .replaceAll("\\s*|\t|\r|\n", "");
        if (str.length() > 30) return str.substring(0, 20) + "....";
        else return str;
    }
}