import React from "react";
import { shallow } from "enzyme";

import Title from "./Title";

describe("Title", () => {
    let props;
    let mountedComponent;

    const title = () => {
        if (!mountedComponent){
            mountedComponent = shallow(<Title {...props}/>)
        }

        return mountedComponent;
    }

    beforeEach(() => {
        props = {}
        mountedComponent = undefined;
    })

    it("should display the passed text", () => {
        let text = "Hello, World!";
        props.text = text;

        const titleText = title().find(".title").text();
        expect(titleText).toEqual(text);
    })
})