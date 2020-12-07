function Delegation_A(domain, record) {
    var output = [
        A(domain, record),
        CNAME("www." + domain, domain)
    ];
    return output;
}

function Delegation_CNAME(domain, record) {
    var output = [
        CNAME(domain, record),
        CNAME("www." + domain, domain)
    ];
    return output;
}

function Delegation_NS(domain, nameservers) {
    var output = nameservers.map(function (el) {
        return NS(domain, el);
    });
    return output;
}
