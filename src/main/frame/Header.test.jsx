import React from "react";
import { shallow } from "enzyme";
import moment from "moment";

import Header from "./Header";
import Copyright from "./Copyright";

describe("Header", () => {
    let props;
    let mountedComponent;

    const header = () => {
        if (!mountedComponent){
            mountedComponent = shallow(<Header {...props}/>)
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