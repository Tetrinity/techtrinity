import React from "react";
import { shallow } from "enzyme";

import Website from "./Website";
import Header from "./frame/Header";
import Footer from "./frame/Footer";

describe("Website", () => {
    let props;
    let mountedComponent;

    const website = () => {
        if (!mountedComponent){
            mountedComponent = shallow(<Website {...props}/>)
        }

        return mountedComponent;
    }

    beforeEach(() => {
        props = {}
        mountedComponent = undefined;
    })

    it("should display the header", () => {
        const header = website().find(Header);

        expect(header).not.toBeNull();
    })

    it("should display the footer", () => {
        const footer = website().find(Footer);

        expect(footer).not.toBeNull();
    })
})