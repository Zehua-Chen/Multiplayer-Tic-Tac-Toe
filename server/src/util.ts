import * as os from 'os';

export function findIpv4(): string {
    
    var address: string = "NOT FOUND!"
    var netWorkInterfaces = os.networkInterfaces();
    
    for (const key in netWorkInterfaces) {
        
        var infos = netWorkInterfaces[key];

        infos.forEach((value, index, array) => {
            if (value.family == 'IPv4' && value.internal == false) {
                address = value.address;
            }
        });
    }

    return address;
}