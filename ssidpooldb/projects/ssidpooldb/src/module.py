#!/usr/bin/env python3
import logging
import json

from pineapple.modules import Module, Request

module = Module('ssidpooldb', logging.DEBUG)

@module.handles_action('GetSSIDSavedPool')
def GetSSIDSavedPool(request: Request):
    return [["coucou", "hello"],["try", "waw"]]

@module.handles_action('SetSSIDSavedPool')
def AddSSIDSavedPool(request: Request):
    return "done"

if __name__ == '__main__':
    module.start()