D_EXTEND('zhp.pl',

	Delegation_NS('mazowiecka', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
	Delegation_NS('rada.mazowiecka', ['ns1.megiteam.pl.', 'ns2.megiteam.pl.']),
	Delegation_NS('stanica.mazowiecka', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
	Delegation_NS('tezm-mazowiecka', ['ns1.x14.eu.', 'ns3.x25.pl.']),
	Delegation_NS('e-mazowiecka', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),

	Delegation_NS('ciechanow', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
	Delegation_NS('gostynin', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
	Delegation_NS('grojec', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
	Delegation_NS('jaktorow', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
	Delegation_NS('lipsko', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
	Delegation_NS('mazowszeplock', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
	Delegation_NS('minsk', ['ns1.hekko.net.pl.', 'ns2.hekko.net.pl.']),
	Delegation_NS('mlawa', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
	Delegation_NS('mszczonow', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
	Delegation_NS('ostroleka', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
	Delegation_NS('plonsk', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
	Delegation_NS('przasnysz', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
	Delegation_NS('radom', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
	Delegation_NS('radommiasto', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
	Delegation_NS('siedlce', ['ns1.manifo.pl.', 'ns2.manifo.pl.']),
	Delegation_NS('sierpc', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
	Delegation_NS('sochaczew', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
	Delegation_NS('sokolow', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
	Delegation_NS('wyszkow', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
	Delegation_NS('zuromin', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
	Delegation_NS('zyrardow', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
	
	Delegation_NS('plock', ['dns113.ovh.net.', 'ns113.ovh.net.']),
	CNAME('autodiscover.plock', 'autodiscover.outlook.com.'),
	CNAME('enterpriseenrollment.plock', 'enterpriseenrollment.manage.microsoft.com.'),
	CNAME('enterpriseregistration.plock', 'enterpriseregistration.windows.net.'),
	CNAME('msoid.plock', 'clientconfig.microsoftonline-p.net.'),

	Delegation_NS('przysucha', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
	TXT('przysucha', 'v=spf1 include:spf.protection.outlook.com -all'),
	MX('przysucha', 0, 'przysucha-zhp-pl.mail.protection.outlook.com.'),
	CNAME('autodiscover.przysucha', 'autodiscover.outlook.com.'),
	CNAME('enterpriseenrollment.przysucha', 'enterpriseenrollment.manage.microsoft.com.'),
	CNAME('enterpriseregistration.przysucha', 'enterpriseregistration.windows.net.'),
	CNAME('msoid.przysucha', 'clientconfig.microsoftonline-p.net.'),

	Delegation_NS('cichociemni.grojec', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
	Delegation_NS('100latgrojec', ['ns1.nazwa.pl.', 'ns2.nazwa.pl.', 'ns3.nazwa.pl.']),
	Delegation_NS('mazowieckazostajewdomu', ['ns1.atthost.pl.', 'ns2.atthost.pl.'])
);