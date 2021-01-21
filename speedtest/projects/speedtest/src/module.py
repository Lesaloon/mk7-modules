#!/usr/bin/env python3
import logging
from pineapple.modules import Module, Request
import subprocess

module = Module('speedtest', logging.DEBUG)

@module.handles_action('TestConnection')
def TestConnection(request: Request):

    ip = request.Ip
    output = subprocess.getoutput("ping -c 1 -w 2 " + ip)

    result = output.split("/")[-1::]
    return result
#PING 8.8.8.8 (8.8.8.8):
# 56 data bytes 64 bytes from 8.8.8.8:
# seq=0 ttl=117 time=26.822 ms ---
# 8.8.8.8 ping statistics ---
# 1 packets transmitted, 1 packets received,
# 0% packet loss round-trip min/avg/max = 26.822/26.822/26.822 ms
if __name__ == '__main__':
    module.start()