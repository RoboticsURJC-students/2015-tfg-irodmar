// **********************************************************************
//
// Copyright (c) 2003-2014 ZeroC, Inc. All rights reserved.
//
// This copy of Ice is licensed to you under the terms described in the
// ICE_LICENSE file included in this distribution.
//
// **********************************************************************
//
// Ice version 3.6b
//
// <auto-generated>
//
// Generated from file `Query.ice'
//
// Warning: do not edit this file.
//
// </auto-generated>
//

/* slice2js browser-bundle-skip */
(function(module, require, exports)
{
/* slice2js browser-bundle-skip-end */
/* slice2js browser-bundle-skip */
    var __M = require("../Ice/ModuleRegistry").Ice.__M;
    var Ice = __M.require(module, 
    [
        "../Ice/Object",
        "../Ice/ObjectPrx",
        "../Ice/Operation",
        "../Ice/EnumBase",
        "../Ice/Long",
        "../Ice/HashMap",
        "../Ice/HashUtil",
        "../Ice/ArrayUtil",
        "../Ice/StreamHelpers",
        "../Ice/Identity",
        "../Ice/BuiltinSequences"
    ]).Ice;
    
    var IceGrid = require("../IceGrid/Exception").IceGrid;
    var Slice = Ice.Slice;
/* slice2js browser-bundle-skip-end */

    /**
     * Determines which load sampling interval to use.
     * 
     **/
    IceGrid.LoadSample = Slice.defineEnum({
        'LoadSample1':0, 'LoadSample5':1, 'LoadSample15':2});

    /**
     * The IceGrid query interface. This interface is accessible to
     * Ice clients who wish to look up well-known objects.
     * 
     **/
    IceGrid.Query = Slice.defineObject(
        undefined,
        Ice.Object, undefined, 1,
        [
            "::Ice::Object",
            "::IceGrid::Query"
        ],
        -1, undefined, undefined, false);

    IceGrid.QueryPrx = Slice.defineProxy(Ice.ObjectPrx, IceGrid.Query.ice_staticId, undefined);

    Slice.defineOperations(IceGrid.Query, IceGrid.QueryPrx,
    {
        "findObjectById": [, 2, 1, , , [9], [[Ice.Identity]], , , , ],
        "findObjectByType": [, 2, 1, , , [9], [[7]], , , , ],
        "findObjectByTypeOnLeastLoadedNode": [, 2, 1, , , [9], [[7], [IceGrid.LoadSample.__helper]], , , , ],
        "findAllObjectsByType": [, 2, 1, , , ["Ice.ObjectProxySeqHelper"], [[7]], , , , ],
        "findAllReplicas": [, 2, 2, , , ["Ice.ObjectProxySeqHelper"], [[9]], , , , ]
    });
/* slice2js browser-bundle-skip */
    exports.IceGrid = IceGrid;
/* slice2js browser-bundle-skip-end */
/* slice2js browser-bundle-skip */
}
(typeof(global) !== "undefined" && typeof(global.process) !== "undefined" ? module : undefined,
 typeof(global) !== "undefined" && typeof(global.process) !== "undefined" ? require : window.Ice.__require,
 typeof(global) !== "undefined" && typeof(global.process) !== "undefined" ? exports : window));
/* slice2js browser-bundle-skip-end */
