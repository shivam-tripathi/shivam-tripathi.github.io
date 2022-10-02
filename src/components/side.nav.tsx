import React from "react";

const SideNavTitle = () => {
  return <div className="title">
    <a href="/" className="desktop"> संक्षिप्त </a>
    <Menu />
  </div>;
}

const Menu = () => {
  return <img className="mobile" style={{ width: '2rem', margin: '0.5rem' }} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAKElEQVRIiWNgGAXDHjAisf/TwmwmKhs6CgYhGE1Fo4ByMJqKRsEQAADWCQMKYvEFtQAAAABJRU5ErkJggg==" />;
}

const RightButton = () => {
  return <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAABXElEQVRoge3ZMU7DQBCF4R9qBCVHAAlooKOlJFEOhSJxKSAHQBwDCCV2Q2UKO1K8rOMNnpldW/ukaVyM3qckzsaBnJyc/2YBrIASqCJPCbwA830RjwmU75plKGKRQNm+mYVAVgkU7Ztnt/SBB1IARyHiiCmA4+0LPkhl02VwWt0PY7WQToZ05Ba4AdbCe3sjDfkB3oA7ImDcDLktroHLZs8Z8D5w365RhWwwV82uc0WMOqQCvgwwJhALjBlEG2MK0cSYQ7QwUSAamGgQH+ZjrBBJTHSIFKaVyZx+fRnDqxH9rTWJD7skIhpEGhEF4h7rJRDmkO0fWpIIU4iLGOUxXhthArFAqEOsEOqQ62bHBfCpiPgDkT5rnVA/pHsCToV370x+iJ1aJg0pzVvsn2/3gg/yalBkaII6ztG9bUrMfah4mUDZrnkIRWwyo/73tEigfEH93RT8SuTk5LTzC+gMdw5CThMRAAAAAElFTkSuQmCC" />
}

export default () => {
  return (
    <div className="sideNav">
      <SideNavTitle />
      <ul className="items">
        {[
          [
            "Home",
            "/",
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAABpElEQVRoge3XsWvUYBzG8Y9yKIJVEXQoDjd2EVzsJDgIgpubbnVydtM/wdWxq5MgiCCO4mBBKAguLuLiIqIUWpCj2FodLm/PxrSXq7nkZ32/8EzJvXm+5PJ7EzK16ONlkX7HXfbNNazgZ5FVXO+00YQcwl38MJJI2cJ9HO6sXU1O4Ik/Bcp5jtMddRzLBXwwXiLlIy6W1tjt3NZYwGCPIrtlUPw2cQffK86bOkfxYB8C5TzEsWLNS/jUpsg5vG5AIuWN0Yg+gxdtiFzG5wYlUr7ianGNnuGE25qGQBqtm1OQSNnEveJacKNpiRk8nqJAOc9wqmmJObxrUSLlPc43JXET3zqQSBng1t8IpIetK4FyFnFkUomzdo6/KFnCbF2Jqg0pUr7gyjiJ26pfEaJlw3AbSCN6m+N4FKDgpHmKk7+LLBcH1gKUq5vUdZnRB84G3mK+fKsCM2/4frZOxX/M0PJfYEf38J+cdcki0cgi0cgi0eg1vF7VvrQXje1ZB+aOZJFoZJFoZJFoZJFoZJFoZJFoZJFoHGiRpdZbTM6rrgtk/ht+AZJi8ybhOtGyAAAAAElFTkSuQmCC",
          ],
          [
            "Engineering",
            "/eng",
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAADj0lEQVRoge2az0tUURTHP6UUOJO6sSh/bJLMIuiHGY3rXJQxukmCFkH9AUUui6CSEsH+AjX6BelfoFG5yTYaLQvaqBW00CAbNX9Ni/te/pi559773htHyi8ckJl7zvd857173nnnClv4P9ABLAHpdbYAtOUxL2dMkCnCt/d5zMsJxcAyeiFzQGHUpNujDgjUAtuE73cC1VGTugipAq4DZYZ1tRaxjhi+LwOuAZUWsZxQzcp9/w1o1KyLA0/Q31a+dQMxTYwzHkcaGAf2R6KAtSJ8Wwa6ULcJQAPQD8xYiPAtBfQBCS/GDqCTzP0ViZhsIlbbB2DQIXmdDQKjwvehxFQYRGy0jQPlumSlzd7oidksqETtH2fEgE/k/0r49hlVTALhBDC/CUQsAKeCivBx25F0ElVek0AN6srGvL+bgR5gyjHmrbAiQLUT7yzIZoB7qBbFhBKgHbtyPQwURCEE4KWB7CtwMkDco8CYIfZAyNz/osFANIFQFi1QAXwxcCS03g7oFwhmgOMRcNQBswJPX1iCOPJ9fCcswSrcF3hSBCi9xahSdwV4JgSfRN7YSWAI+OXZG+C8sL4EuZo9Bi6j9uIuScADVBtgWxK7DbF0fu2CX68D/xjqKmYg2zu2ZElNMkkL3yaNb4tjDkvZgrgESAMHNMkMWfi+1vjWBMgjtBDd5pu28P2p8Y0HFZKLd3YbZP0lCZFPGCH7NJ+PWPjq1uwNmMsaIYuOvoc0n3dZ+OrWHHbMIWvObajh2W/s7s0egaBd8Lsr+D2y5J7zcr0hqSxE/dqthsCTqIeYDk2o6jTt2SvgnLC+FPgh8PUAF1DjJucBXxHqqawLLj3cXNEh8KTQj4+sITWNs6iGLyzqkZvGFxFwkBAI0qgWPMyQohL1PiNxnA4Rfw1sXqzqA8Q9xga+WO1EDeJMlWQW1cRJBcBHKWpPzFnEHUFNIUPjoQXZaptCdbHNwEFU2xH3/m5BVUKpOmWzzrAiGpHPOjbKloGzQUWUsTIV3wz2HdijS1bqtS4RovfJAXYDF4M4VrH5htiBD35MxwrDRHOsMAC8NYjIyRnJPGqM6fc8CdTTN+WQfMrz8R92BcBNMmfNOTu1+oh+qhgDnluI6EXfO9V5HGmPMzIRPspR45giw7qrmIW0GmIUeVxhJpihYerN0tid/OYdJeThHwZyBWkoPZoLwlxNUZ6irsp6LKLGsFv45/EH7MxXsTMY2v8AAAAASUVORK5CYII=",
          ],
          [
            "Product",
            "/product",
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAABgklEQVRIie2WT0tCQRTFf0YtUgxxkUq1DHdBy6g+QC115TL6dCl9gIJoEW0tkMJWRrZLo9z2xxbvmKNM7837QwR5YJh5M+feMzPce+fBDDP8IvaBLjBMqHWBPRfhJEVH7WFaJGURHrrsLgImtOZCGG7L2K/tujoLI+zCtd2gM/HPXXWi+H/C8wn7OwUawAXwiBcvK8COi3GUAtF2dZ6k8DmQk+0ykNa4ARxpnAFKpkjcdGoDW8CLvlvq34BNja+ABfnd8HMW5rTm9a4CPR9uT5zYwifiF3TSPuMHoQpkgSWgAtxprS9uIY7wofhp4NYQzVt85oGOODfAYhzhsmFzrbmqzaFQE6f5E2HgKJwV/9gyB3CJl88jFA1e3Va5znx2beJT/Ycxl5paD/XglIFngk+8btg0NVfx8Rt41QBrQB149RE+EDeDFzBDvOi1BVcOuCcguMKixGQ6dfBOV1SrMY7oHj7pFBVBBeQJo4A4/6o4oiWRdyKUzDiYfiQaGqe19o0vwALgfTW9zPsAAAAASUVORK5CYII=",
          ],
          [
            'Leadership',
            '/leadership',
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAA+klEQVRIie2VQQ7CIBBFn8b0AHbvTbxf3eoRvIB3MO69g1JPoXVDEyQDTClNjPYlTejAzE/nQ4GZL6UG1nZ8Ac5CXMVqoPAV6IAN8LJjPz6J8MkKAmwD8WLUwB3YK9YegBuKti8VxTo+21oBO6AFDNDYWL+28wuUonEE+qeZSsylFYQfQ4toWu0jtfJZQjjmIcBRyHFjqfwgKQ8r+24ChbP3wFgPVflSq8d6qMqXhGMeuv71X+O3O7UHgsQ8lPzzfUztgSwk/7LO8mKgcOp3qK7ne6zxMEZ2fsrD0JxmTfQsm0hibE6zxrhCvieTXWm+Xs4lUYT/E575fd6T0pwoEdLSFgAAAABJRU5ErkJggg==',
          ],
          // [
          //   "Philosophy",
          //   "/philosophy",
          //   "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAD/UlEQVRoge3aXYhVVRQH8F+TNYokqY2VRB+UZUYvUUioSF8TA4JREKbPEQV9WUQQ9BAoFkLfib1EPfRm9GHZSBDRPJRl9TTpzNBDTlFTRqUSo+NMD3vOuM/1zJ27z/2Y++AfFqxz9llrr//dZ++99jqXM2gvnNVAXwuxFquwAldiCeZPth/D7/gJ/ejDF/i7gTGURic2oRdjmEiUMezBxklfLcc8bMYvNQRbqwzjMcxtFYkeDDWQQKUM4s5mEujEy00kUCnvCCPfUFyIb1tIIpN9woLREFwuDHerSWQyMBlDXejCgVkkkckQLipLYq7ZeZ2qvWallugdbRB8pbyaSqKnDYKeTrprJTFP+X1iGO9P03YYu7EL3yiXCUwIk7+mV2xzyQ7eEPKqOcL7nN0fx3NO3xOWYjuOl+jr0ZlIdEpPO8bxYIWfLVH78zP0uQp/JfZ5yAyjsinR4QSejuw78HbU9i8WRO3b8D22yo/QSowm9ntfNSK9ic72yh8Ftle0fxS1raho65NPEJ9J7PuT6UgslDYBT2J5ZL++4JkXo/a7Ctq3Re3zMZLQ/wnRaHdEjtbi7OlYFmCPsOtn2FLwzD+RXpSePyL8gISD17sJ/c8RYkaeyOoEJ/BhpN+I6xLtCfNkfXS9N9F+TabERJYXPFgNfUUOS2BlpPcn2l6bKTGRqxOd/Bbplybaxlga6SOJtssyJSayKNHJsUhv1PE0ZY7C4kyJiZyX6KQr0v9MtI0Rj0Jqqj4Vc0e1p2bAJZH+Qx1+9kf6NWWdxESOJtreFum9wi6eijH5TbMn0X6qz5hI6utxd6QfxUuJ9vCWkNsRNsR7Eu0PZ0pMZDDRyQ3yZLbi8wT7fjwVXT8uFDlSMBVzTOTHRCeEFCSboKNYh51CRlwNvbjVqXLpzUKulYrCmItypVrkO6eXbJbhWdwb3bsFr4nSikncJNSEy/S9rojI+cqf2n6dzmkVnCPkWv+V7PO4/BEhh09LOs1kH+6X360rcQWeVH+tbHe1X2ljnc5jGcEDke9u/NFA/xviwCs3xF1OLYf1ogsXR9eLcEGDfA/jvfhGJZFR4ZTX7nhBmCNTKEpRduBgS8Iph0G8WXmziMioGsots4QJPCTEmMN0SWMvXm9mRCXxCj4raqiW/T4hVATbBV/LpzQ5VDvInMQHQvVjcZXnqmFM2FNWCzv69SX9DOAOHClpj/CRZUDj1v9UOYjL6iEQY4l8PbdV8pX8SbQhyD6GjreIxE5N/vberbmv2gHc3kwCMTqFveZQAwn8jIfN0j8gOoWq+MdCLTY1+BNCFrsB59YTSCP/VLNAWGLXCBXAq4SJmpVsjggZ8ZBwsvtS+FNNXUvqGbQr/gcDVlhybyl57gAAAABJRU5ErkJggg==",
          // ],
          // [
          //   "Spirituality",
          //   "/spirituality",
          //   "data:image/png;base64,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",
          // ],
          // [
          //   "Problem Solving",
          //   "/problem-solving",
          //   "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAACMElEQVRoge3Zv2vUYBzH8de1OFVBUCpKN4v4q6uLImoX/4jWHyi4OvhXiIjo4CYiDg4Krrrp0EGcVNBaBx20tgq21E5ePYdcaChpeknOPJfj3vBwHNzzfT7vfJMnCUefMFxi7g40sNalLKVoFJx3DdcT81exiAX8xA98wQfM4h2apZL+Jy6JOtHqcKzguegA7A2QN5MJvNC5TDz+4AnGq4+8OQ1cFp1aeYWWcbr6yNkcxBv5ZVZxJkDeTEbwVH6Z3zgZIG8mw7inWGdOBcibyRDuyC+zogc7A7f0yTUzhMf6RGYEnxSTmQyQN5NJ+UVimeMB8mbyWjGZuU4XGOpu3k35WHDeOHZ3M0gZ9mNJsY58V+5Vo6u8Ukyihc8Yqz5yOhOid5WiMnOiG+UJXMWRKsOPYaYtQfRQOd9h8J7ZmsdER7El6kQtZZIS8VjE0TrJpEkkd5/D7d+VvWY2yhyrSmIrmSbutj+LyMxUKZGUOZSQmcd0+/tUQZHlqiXiMZ+Q2b6h3mwBkWchJOLxNUViG37lrLOIA6Ek1nAxpea+nHUWrO+GPSMRcz+HRKk7fBmJv7iyRf1hPOhAImgnLnS4TpZMbSSSMg831PlmfberhURMoz33EW5gT2ED5SXOl1m8WwwkDCS6RxmJph6R2KWcxLnqI6dzW3GJ6ZR6wXipDyTgpvwSU0GSbsFOvFdziZhR0Z/7tTud0siSqY1ETJpM7SRiRkVPnkt4i7Nh4wwYEIR/TQ3fpX3slqMAAAAASUVORK5CYII=",
          // ],
          [
            "About",
            "/about",
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABWUlEQVRIibXVy0ocQRjF8d94W+QFXOgk4MJFFsE8gRsVDSSgD+LGl/AdkszalTsJuBVFEhgv6CYhWQTxEuNOHJkRJosppWnpruroHDjQ1f19/0MVVdU15XqFJcxhEqPh/Tm+YxPr+B3hPNI4GmijG3EbnzGWCn+HvwngvC8xH4Mv4q4Echpc9L2DD0Xwt2iVNO9jMHivpO4Gb/LwGnYiS3CIoeCDSO1WYD5oLtJw77PglNqZbEAjsamKP2YDjhMampgIbibUHwnrCXVx3eJX5jmmlzAQBt2EhqoayAac9CHgIhuw24eAb9mAtT4EbGQHNWwr3xU7mfrYobzEi3zilN4xL2pq4Wdw2ZXSxUrRtN7rXVhPOWC7GC4KgIUwxf+BXwn7P6YxfJL2w7n3jdz9k6I6lvV2xA9cl8Bnq8KLlIf/wfRzwfMBXyWuedWADlYx8txw+ILXqcX/APJm/BWgL6buAAAAAElFTkSuQmCC",
          ],
        ].map(([tag, link, imageUrl]) => {
          return (
            <li
              className="item"
            >
              <a className="no-link" href={link}>
                <img src={imageUrl} />
              </a>
              <a
                className="no-link"
                href={link}
              >
                <span>{tag}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
