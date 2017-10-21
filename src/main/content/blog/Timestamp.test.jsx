import React from "react";
import { shallow } from "enzyme";

import Timestamp from "./Timestamp";

describe("Timestamp", () => {
    let props;
    let mountedComponent;

    const timestamp = () => {
        if (!mountedComponent){
            mountedComponent = shallow(<Timestamp {...props}/>)
        }

        return mountedComponent;
    }

    beforeEach(() => {
        props = {}
        mountedComponent = undefined;
    })

    it("should convert the passed timestamp into a readable format", () => {
        props.time = "2010-01-03T14:30:00Z";

        const timestampText = timestamp().find(".timestamp").text();
        expect(timestampText).toEqual("3rd January 2010");
    })
})