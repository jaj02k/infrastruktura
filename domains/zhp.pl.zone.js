D('zhp.pl', noneRegistrar, DnsProvider(azureProvider), DefaultTTL(3600),
    A('@', '51.75.54.175'),
    CNAME('www', 'zhp.pl.'),
    Ms365_Root('zhp.pl'),
    Redirects(require('./redirects/redirectFiles/zhp.pl.json'))
);

require_glob('zhp.pl.d/');

// TODO lines below require clean-up
D_EXTEND('zhp.pl',
    TXT('_acme-challenge.haliz', 'jd-YDJYrtRp7nynl5NEJyNrHqwrtfpm7j1H-rOJ5LfQ'),
    TXT('_github-challenge-itwzhp.gk', 'e9917cb777'),
    TXT('_github-challenge-itwzhp', 'da1510325a'),

    CNAME('*.a.panel', 'a.panel.zhp.pl.'),
    CNAME('*.kch', 'kch.zhp.pl.'),
    CNAME('*.tornister.fsj', 'tornister.fsj.zhp.pl.'),
    CNAME('646napfp2tt7', 'gv-4pvab7ilnxipxn.dv.googlehosted.com.'),
    A('a.panel', '89.161.251.120'),
    MX('a.panel', 10, 'a.panel.zhp.pl.'),
    TXT('a.panel', 'v=spf1 mx a ip4:89.161.251.120 ~all'),
    Delegation_NS('abcabc', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('admin', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_A('archiwum', '51.75.54.175'),
    CNAME('autodiscover.jpt', 'autodiscover.outlook.com.'),
    CNAME('autodiscover.muzeumharcerstwa', 'autodiscover.outlook.com.'),
    Delegation_NS('award', ['ns1.superhost.pl.', 'ns2.superhost.pl.']),
    Delegation_A('bazy', '51.75.54.175'),
    Delegation_A('bip', '51.75.54.175'),
    Delegation_A('cbp', '51.75.54.175'),
    Delegation_NS('cogito', ['ns1.superhost.pl.', 'ns2.superhost.pl.']),
    Delegation_A('covid-zaswiadczenia', '51.75.54.175'),
    Delegation_NS('czarnyszlak', ['ns1.hostinghouse.pl.', 'ns2.hostinghouse.pl.']),
    Delegation_A('czat', '51.75.54.175'),
    Delegation_A('czuwaj', '51.75.54.175'),
    Delegation_NS('czuwaj2', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    A('dev-rejestracja', '213.189.38.130'),
    A('devel', '194.29.174.10'),
    Delegation_A('dk', '51.75.54.175'),
    Delegation_A('dokumenty', '51.75.54.175'),
    Delegation_NS('e-aos', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_A('e', '51.75.54.175'),
    A('ed', '104.214.218.237'),
    A('edek', '104.214.218.237'),
    A('edeklaracja', '51.105.209.75'),
    A('edev', '213.189.38.133'),
    A('edev2', '213.189.38.133'),
    A('edruzyna', '213.189.38.133'),
    A('ehufiec', '213.189.38.133'),
    Delegation_A('ekodruzyna', '51.75.54.175'),
    CNAME('enterpriseenrollment.jpt', 'enterpriseenrollment.manage.microsoft.com.'),
    CNAME('enterpriseenrollment.muzeumharcerstwa', 'enterpriseenrollment.manage.microsoft.com.'),
    CNAME('enterpriseregistration.jpt', 'enterpriseregistration.windows.net.'),
    CNAME('enterpriseregistration.muzeumharcerstwa', 'enterpriseregistration.windows.net.'),
    Delegation_NS('exkursion', ['ns12.linuxpl.com.', 'dns12.linuxpl.com.']),
    Delegation_NS('frelichowski', ['ns12.linuxpl.com.', 'dns12.linuxpl.com.', 'fns1.42.pl.']),
    CNAME('ftp', 'zhp.pl.'),
    Delegation_NS('glodowka', ['ns1.netart.pl.', 'ns2.netart.pl.']),
    Delegation_A('haliz', '51.75.54.175'),
    A('harc2o', '51.75.54.175'),
    Delegation_NS('harcbieg', ['ns1.megiteam.pl.', 'ns2.megiteam.pl.']),
    Delegation_A('hib', '51.75.54.175'),
    Delegation_NS('hops', ['ns1.cyberfolks.pl.', 'ns2.cyberfolks.pl.', 'ns3.cyberfolks.pl.']),
    A('hp8', '213.189.38.135'),
    A('integrationservice', '104.214.218.237'),
    Delegation_A('intranet', '51.75.54.175'),
    CNAME('irc', 'chat.eu.scoutlink.net.'),
    CNAME('irc2', 'chat.scoutlink.net.'),
    MX('jpt', 0, 'jpt-zhp-pl.mail.protection.outlook.com.'),
    TXT('jpt', 'v=spf1 include:spf.protection.outlook.com -all'),
    MX('kch', 10, 'kch.zhp.pl.'),
    A('kch', '89.161.251.115'),
    A('komunikaty.gk', '51.75.54.175'),
    Delegation_NS('korzkiew', ['ns1.hekko.net.pl.', 'ns2.hekko.net.pl.']),
    Delegation_NS('ksiegagromad', ['ns1.zenbox.pl.', 'ns2.zenbox.pl.']),
    Delegation_NS('kursharcmistrzowski', ['ns1.superhost.pl.', 'ns2.superhost.pl.']),
    Delegation_A('kursy', '51.75.54.175'),
    Delegation_A('lacznosc', '51.75.54.175'),
    Delegation_NS('lednica', ['ns1.zenbox.pl.', 'ns2.zenbox.pl.']),
    Delegation_A('lesneplemiona', '51.75.54.175'),
    Delegation_NS('limev3', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    A('limev4', '51.75.54.175'),
    Delegation_A('lotnictwo', '51.75.54.175'),
    CNAME('mail', 'zhp.pl.'),
    Delegation_NS('mailing', ['redir1.freshmail.pl.', 'redir2.freshmail.pl.']),
    Delegation_NS('mak', ['ns1.ogicom.pl.', 'ns2.ogicom.pl.', 'ns3.ogicom.pl.']),
    Delegation_NS('miks', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    CNAME('msoid.jpt', 'clientconfig.microsoftonline-p.net.'),
    CNAME('msoid', 'clientconfig.microsoftonline-p.net.'),
    MX('muzeumharcerstwa', 0, 'muzeumharcerstwa-zhp-pl.mail.protection.outlook.com.'),
    TXT('muzeumharcerstwa', 'v=spf1 include:spf.protection.outlook.com -all'),
    A('muzeumharcerstwa', '185.36.169.152'),
    CNAME('mysql', 'sql.zhp.pl.'),
    Delegation_A('n', '51.75.54.175'),
    Delegation_A('natropie', '51.75.54.175'),
    Delegation_NS('nazajecia', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('nforum', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('nml', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_A('nowe', '51.75.54.175'),
    A('ns1.worker', '46.101.240.55'),
    A('ns2.worker', '46.101.240.55'),
    Delegation_NS('ocypel', ['ns1.netmark.pl.', 'ns2.netmark.pl.']),
    Delegation_A('odkrywcy', '51.75.54.175'),
    Delegation_NS('opal', ['ns1.webserwer.pl.', 'ns2.webserwer.pl.']),
    TXT('ovhcontrol', 'aoRqdwWKKnTDamiIqv6uqQ'),
    Delegation_A('panel', '51.75.54.175'),
    A('patronus', '109.95.157.35'),
    Delegation_NS('pielgrzymka', ['dns.smarthost.pl.', 'dns2.smarthost.pl.', 'dns3.smarthost.pl.']),
    A('poczta.worker', '46.101.240.55'),
    A('podcast.radio', '89.161.251.119'),
    A('polubicfinanse', '89.161.251.120'),
    Delegation_A('powodydodumy', '51.75.54.175'),
    Delegation_A('programator', '51.75.54.175'),
    Delegation_NS('przeslanie', ['ns1.ogicom.pl.', 'ns2.ogicom.pl.', 'ns3.ogicom.pl.']),
    Delegation_NS('ps', ['ns1.ogicom.pl.', 'ns2.ogicom.pl.', 'ns3.ogicom.pl.']),
    A('qnapgk', '213.189.38.134'),
    Delegation_NS('qwas', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('rajdgranica', ['dns1.linuxpl.com.', 'dns2.linuxpl.com.', 'dns3.linuxpl.com.']),
    Delegation_A('rajdodkrywcow', '51.75.54.175'),
    Delegation_NS('rajdscenariusz', ['ns1.8p.pl.', 'ns2.8p.pl.']),
    A('raporty.odkrywcy', '51.75.54.175'),
    Delegation_A('repozytorium', '51.75.54.175'),
    Delegation_NS('rnz', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    A('sapi', '213.189.38.133'),
    A('sezam', '89.171.90.254'),
    Delegation_A('sluzba', '51.75.54.175'),
    Delegation_A('spadochroniarze', '51.75.54.175'),
    Delegation_A('specjalnosci', '51.75.54.175'),
    Delegation_NS('sroda', ['ns1.interian.pl.', 'ns3.tomkii.net.', 'jasmin.bracz.edu.pl.']),
    Delegation_A('starszyzna', '51.75.54.175'),
    A('starszyzna2', '51.75.54.175'),
    Delegation_A('stock', '51.75.54.175'),
    Delegation_A('stopka', '51.75.54.175'),
    Delegation_NS('strategia2025', ['ns7.wixdns.net.', 'ns6.wixdns.net.']),
    Delegation_A('strony', '51.75.54.175'),
    Delegation_NS('superstrona', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('szaradruzyna', ['d.ns1.pl.', 'd.ns2.pl.']),
    A('test-rejestracja', '213.189.38.130'),
    Delegation_NS('test1234', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    A('tornister.fsj', '89.161.251.120'),
    MX('tornister.fsj', 10, 'tornister.fsj.zhp.pl.'),
    Delegation_A('turniej', '51.75.54.175'),
    Delegation_A('turniejgromad', '51.75.54.175'),
    Delegation_NS('uczestnik.sdm', ['ns1.hekko.net.pl.', 'ns2.hekko.net.pl.']),
    A('veturi', '213.189.38.133'),
    CNAME('vpn.ostroda', 'merkury.ostroda.zhp.pl.'),
    A('vpngk', '213.189.38.130'),
    Delegation_A('watra', '51.75.54.175'),
    Delegation_NS('westerplatte', ['ns1.hekko.net.pl.', 'ns2.hekko.net.pl.']),
    A('wntgk', '213.189.38.130'),
    Delegation_NS('wolow', ['ns1.ogicom.pl.', 'ns2.ogicom.pl.']),
    Delegation_A('work', '51.75.54.175'),
    CNAME('www.czarnyszlak', 'czarnyszlak.zhp.pl.'),
    CNAME('youthwave', 'zhp.pl.'),
    Delegation_A('zapytaj', '51.75.54.175'),
    Delegation_A('zgloszenia-rajdodkrywcow', '51.75.54.175'),
    Delegation_NS('zgloszenia.rajdgrunwaldzki', ['ns1.megiteam.pl.', 'ns2.megiteam.pl.']),
    A('zhpbaluty', '217.76.113.42'),
    Delegation_NS('zielonanuta', ['ns1.he.net.', 'ns2.he.net.', 'ns3.he.net.'])
);
