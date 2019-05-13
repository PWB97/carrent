package com.pu.carrent;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;

public class AlipayConfig {

    // ↓↓↓↓↓↓↓↓↓↓请在这里配置您的基本信息↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓

    // 应用ID,您的APPID，收款账号既是您的APPID对应支付宝账号
    public static String app_id = "2016100100637161";//例：2016082600317257

    // 商户私钥，您的PKCS8格式RSA2私钥
    public static String merchant_private_key = "MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCbDJe2OLDc4fAPwCVs9+c5pGfkz3y5yp5H4YF4jPITu6VwTuJBnEwO/cx+1uivTo91Fk2RwdVmtlkp65qPY6lMS3js691dsbkkNFcLAm4EcAMy5bJeDCxxsYz5AyR53f4rW25zSTbP1zCcK9t38nNLkxv3ATGMXsBNcB6LNdYgRlEDmShMLRm/xItmwe3CEnFrnWDC6GHI5y79nd1YhOSMqydBPtkWASu7qeIHagJgxEaawbW+rcKBB3P4Ir2U0jsz1Ufu060V6WagdjQCCE8FMwXU1oj+YMe8q9HyAsWL8soO+aOCMCZ+r0cr7Gf0A+u9O9TwGFOZ+ngdi6eTQVnrAgMBAAECggEAOXkYf4ZSIP5rQxthhBv8jQRhMpKq1B/EPjbcDDiKvz/OWmwTOGjcVK5FcDrvc5Q2XxuOU1o7ZWBweraHy2EQ72QGhiQEIWfwjfgMz9rttx1iQiqczHnMu7Qp4mAE1FuyjJXOwlNASxikPy+Ooc6waDI2qn+5wyOYOtw1pjqljb6M7nrY7fBd3flHNE74Uxz7k5DHnNZ/XyOvc5XmOoSq4LmVRyVi1RQVjedR0FYZkgE88qptfOjmeDQlXSLl2NLw+gwed7UAnlDhUQRWdTs66UohkkPMfjPyP0CSacxei7Qpho/gXvA7p0P0c/UhW+sp9zXSA8tLrce4b3eGAC85wQKBgQDtWptat4jQ2dC1ZMupCaU+np83itb2oIQLMxOIA8tnWUAPNdDYj7ngsN6B/RhDDEZcvH5HftYFbqNXrafnqcemZ1sQYJqOU4zfg6hksDPHxlNcWnpID1ggsY1nvNn3Nk04S1FdB2VwQzbToxkhvdZPdfbPOAQ05Aw7h+ObutJv4QKBgQCnOsQfyjlz0OVgPTnXkRhvFTzZi4yNlttPIZSm6XApUGoCK6tFMiTTwIC0rLtsb9m+B/VXpEwrSbAll9DIqguK1HQkRdfUa7O71dWExzzM6t/tS+T0kJD/yC7pD3TobQif0yzzGtY79FfRayeV6P4C75Bgl6kPLUT5CLCZJGjzSwKBgAzYmY3oXwxGragTo34rmnjwJtffuNCyUVM12XnEEs8uImxwUjRWWw4RJInOg/ClCm3cec0uzTCQE2Eccfj01GxqLaCOSe8oEHjMbGG+s569WiemcfXSdseWNHwH2ZgqpTVFxkqNquzPhnkf261a0+2LCeefNYMTUKIsMaJtExShAoGBAKaBP6e7bSrgspH5RC9bm612wuiEJsUPkHsgn2b1hSTNmU9h9ZznCX4A7OV4GwEj+PRZ7jF+OAzdyNIVb99sWCO5144KMJSjTAjZJ0iWK/aIYb9e0q+jhYv34KVTK38EmRKxa87+SJLXfdzYyUhc/RUlPGbAeqbO1x7yRQumEg0zAoGBANseOKRbcLqK/xxF3fWQNv59pEQipS6rsuTVO05X8MXhnR5pdj0gOA41J5jYqSPOkCb2yeVIkQ0oxc/kZUeqlIiL+eUl7jomje+12liecXxso3MmJZwRuHQ/alLcgA2Rq/UTpc0ij/fl6bsd+rEgRczpY7k1/igyaZ/K+U5dlW50";
    // 支付宝公钥,查看地址：https://openhome.alipay.com/platform/keyManage.htm
    // 对应APPID下的支付宝公钥。
    public static String alipay_public_key = "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAmwyXtjiw3OHwD8AlbPfnOaRn5M98ucqeR+GBeIzyE7ulcE7iQZxMDv3Mftbor06PdRZNkcHVZrZZKeuaj2OpTEt47OvdXbG5JDRXCwJuBHADMuWyXgwscbGM+QMked3+K1tuc0k2z9cwnCvbd/JzS5Mb9wExjF7ATXAeizXWIEZRA5koTC0Zv8SLZsHtwhJxa51gwuhhyOcu/Z3dWITkjKsnQT7ZFgEru6niB2oCYMRGmsG1vq3CgQdz+CK9lNI7M9VH7tOtFelmoHY0AghPBTMF1NaI/mDHvKvR8gLFi/LKDvmjgjAmfq9HK+xn9APrvTvU8BhTmfp4HYunk0FZ6wIDAQAB";
    // 服务器异步通知页面路径 需http://格式的完整路径，不能加?id=123这类自定义参数，必须外网可以正常访问
    /**
     * 返回的时候此页面不会返回到用户页面，只会执行你写到控制器里的地址
     */
    public static String notify_url = "http://4j3dzd.natappfree.cc/notify_url";
    // 页面跳转同步通知页面路径 需http://格式的完整路径，不能加?id=123这类自定义参数，必须外网可以正常访问
    /**
     * 此页面是同步返回用户页面，也就是用户支付后看到的页面，上面的notify_url是异步返回商家操作，谢谢
     * 要是看不懂就找度娘，或者多读几遍，或者去看支付宝第三方接口API，不看API直接拿去就用，遇坑不怪别人
     */
    public static String return_url = " http://4j3dzd.natappfree.cc/return_url";
    // 签名方式
    public static String sign_type = "RSA2";
    // 字符编码格式
    public static String charset = "gbk";
    // 支付宝网关
    public static String gatewayUrl = "https://openapi.alipaydev.com/gateway.do";
    // 日志地址
    public static String log_path = "/User/pu/";
    // ↑↑↑↑↑↑↑↑↑↑请在这里配置您的基本信息↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑

    /**
     * 写日志，方便测试（看网站需求，也可以改成把记录存入数据库）
     *
     * @param sWord
     *            要写入日志里的文本内容
     */
    public static void logResult(String sWord) {
        FileWriter writer = null;
        try {
            File file = new File(log_path + "alipay_log_"
                    + System.currentTimeMillis() + ".txt");
            file.createNewFile();
            writer = new FileWriter(file);
            writer.write(sWord);
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            if (writer != null) {
                try {
                    writer.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }
    }

}
