import React from "react";
import { shallow } from "enzyme";
import Website from "./Website";

describe("Website", () => {
    let props;
    let mountedComponent;

    const website = () => {
        if (!mountedComponent){
            mountedComponent = shallow(<Website {...props}/>)
        }
    }

    beforeEach(() => {
        props = {}
        mountedComponent = undefined;
    })

    it("should test something", () => {
        
    })
})