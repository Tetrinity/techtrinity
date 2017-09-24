import React from "react";
import { shallow } from "enzyme";

import Footer from "./Footer";
import Copyright from "./Copyright";

describe("Footer", () => {
    let props;
    let mountedComponent;

    const footer = () => {
        if (!mountedComponent){
            mountedComponent = shallow(<Footer {...props}/>)
        }

        return mountedComponent;
    }

    beforeEach(() => {
        props = {}
        mountedComponent = undefined;
    })

    it("should display a copyright message", () => {
        const copyright = footer().find(Copyright);

        expect(copyright).not.toBeNull();
    })
})