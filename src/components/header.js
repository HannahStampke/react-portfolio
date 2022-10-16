import React, {useState} from "react";

import {
    headerContainer,
    innerContainer,
    extendedContainer,
    contentContainer
    leftContainer,
    rightContainer,
    menuButton,
    linkTag,
    extendedLinkTag,

} from ".../styles/headerStyle";

function Header({ currentPage, handlePageChange}) {
    const [openedNavbar, setOpenedNavbar] = useState(false);

    return (
        <headerContainer>
            <contentContainer>
                <innerContainer>
                    <leftContainer>
                        <h1>Hannah Stampke</h1>
                    </leftContainer>
                    <rightContainer>
                        <linkTag
                            onClick={() => handlePageChange("aboutMe")}
                            current= {currentPage === "aboutMe" ? true : false}
                        >
                            About Me
                        </linkTag>
                        <linkTag
                            onClick= {() => handlePageChange("projects")}
                            current= {currentPage === "projects" ? true : false}
                        >
                            Projects
                        </linkTag>
                        <linkTag
                            onClick= {() => handlePageChange("contact")}
                            current= {currentPage === "contact" ? true : false}
                        >
                            Get In Touch
                        </linkTag>
                        <linkTag
                            onClick= {() => handlePageChange("resume")}
                            current= {currentPage === "resume" ? true : false}
                        >
                            My Resume
                        </linkTag>
                        <menuButton
                            onClick= {() => {
                                setOpenedNavbar((current) => !current);
                            }}
                        >
                            {openedNavbar ? <>&#10005;</> : <> &#8801;</>}
                        </menuButton>
                    </rightContainer>
                </innerContainer>
                {openedNavbar && (
                    <extendedContainer>
                        <extendedLinkTag
                    </extendedContainer>
                )}
            </contentContainer>
        </headerContainer>
    );
}

export default Header;