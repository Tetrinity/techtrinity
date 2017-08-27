import React from "react";
import { shallow } from "enzyme";
import moment from "moment";

import Copyright from "./Copyright";

describe("Copyright", () => {
    let props;
    let mountedComponent;

    const copyright = () => {
        if (!mountedComponent){
            mountedComponent = shallow(<Copyright {...props}/>)
        }

        return mountedComponent;
    }

    beforeEach(() => {
        props = {}
        mountedComponent = undefined;
    })

    it("should list the correct copyright notice", () => {
        const text = copyright().find(".copyright").text();
        let currentYear = moment().year();

        expect(text).not.toBeNull();
        expect(text).toContain("2017 - " + currentYear);
    })
})