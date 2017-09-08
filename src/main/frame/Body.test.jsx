import React from "react";
import { shallow } from "enzyme";
import moment from "moment";

import Body from "./Body";

describe("body", () => {
    let props;
    let mountedComponent;

    const body = () => {
        if (!mountedComponent){
            mountedComponent = shallow(<Body {...props}/>)
        }

        return mountedComponent;
    }

    beforeEach(() => {
        props = {}
        mountedComponent = undefined;
    })

    it("should test something", () => {
    })
})