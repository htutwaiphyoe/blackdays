import { Link } from "react-router-dom";

import Event from "../../components/Event/Event";
const Month = (props) => {
    return (
        <section className="">
            <Link to="/history/month/2/day/1">
                <Event
                    photo="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAeFBMVEUAAAD////i4uLKysqhoaF/f3+zs7P4+PhmZmbR0dFXV1d1dXUSEhL19fWDg4Pu7u7BwcFAQECbm5uLi4tdXV3o6OhLS0ve3t64uLgoKChpaWmrq6sdHR2/v7+UlJRTU1MYGBgvLy9xcXE2NjYjIyMLCws6OjpFRUXXp+HXAAAFGklEQVR4nO2ba3uiPBCGRRGkinjGQ9Vq6/b//8PXMpNzQNj32m6zPvcnGRJMHidhMom9HgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIB63odTyXi8H212rapNhnGSJIu9aR0fkuQwffVVeF3ey8erNs+eDsrsuH9c7ttZpZFFsR4sNw/rHbn0VDfu6GEDX4UBPfxxizZlVXLdsgPfyczWilifmqtdhMalYSZFohe3wpzuxA8bFPOD+1168U0M/GJFUdoo11KWe9fN56jOtfhHedScl0I8Nyix7kPms75aKUsdfI9zhvGlnWNt1bf/XLGKsl9R5Lk+h03ram1Umdx3w3GtYxvHuurf/XPFWijDfJjIoaDbDWhiob6ZExS71twsv2vhWBcxfeY/XCyrF8O1UGvpr1Xdz2jQHI07PJGbRh5euTemYJbsVulpGpZY6p0UeQOjFxJy5Rtb7FoX3dbCsYb8fcd3/hiQWL0rN35981QiR7lNaLwOjXvsWlvdlpBjNYW71I7+128Tnli9UVTrDpNqVsmEaJnvidGbsnCs2jhjZWrQByiWDKVcf9hX9vurcuUZcsK1EmU5kGN9NLVjpua5EMWiH9t3byCnKnoRWOErv9WkNrv8sWP1XrZn8TFIsX5Rp53l3KQyV6HUwdcvjrVktLpo4Vg6QYpVt9Kj8Xn9+sjLm7NZgFwr5fH70caxdMIUa2W5CFMtddJJ9Xntq74xxu8p0sq3IUyxeqmv2R+VcUYXNMTsdAq5VvFWXZCedWsBD4GK5U0VULw6ootPKmGFruxaVSRAAVvaoUmBisVxvLnQqyLRQowqSj9YqxtWea0KPEiPGQQqFk9aY91GSx0ZoNNsX1irPo619sL1ujhWqGK9R+58k5jj7tWjZ0+4ViY+dHGsUMV6jdy7uTWjU+hqJ7B+iQFMjtepSYGK9UZd1mOHsW3hdIEdcpJHJSc107cmULEmrlgzcxTeibx6XCprbr4N2hGoWK5n7exRKOQr7bratlGnGSt0sbS7U7c45SCc5MRFatXRsUIV68MRi6Imc/MmdcZqhdiG7ThjBSsWv9NUKvTT1w9KATpvvLlwLF+utYlAxeJsqXIkWgpa6zwKU91t6O1vzVjBisXLHWXoV9f2Jg1Zt5aV4/+0aUvHS6BicWJKXost1MxgUFjFGPK4DrkZJlCxKG2novMkasJe8jyXWHN70im8IgmsXZ4nE4sdSUZQI69GktTc5XkysUgDFZvXnOWSWAHVU4kV2xLQ9XjkUliyVjyTWDxj5W/CQJ3wHl+kLTErsn8msfgkjZreKXPlLGu+4JSq+ZgnEovP9ilH4kzg3C3aE+9Js4NPI9ZcRAlq/zT2zUsCWgeZS54nEWt38LzgvPupAt9Bo39VLG1pfJuP1aFcTRreqa87lEuj1khd/atilQkxy0p5QtL0K37h1YxCeUDpqpm6ibUaM1f6pkJe/17H/gRNR7uNfWaaxGrzLTeqo+/ydBLrXN+OzjmeP0a9WAejl/vmUShPc2mZvk5inerF8v675a9QI1YeW3tbNdsSCt4S00ZuJ7EWIYg19LSuH5+dcoUthQPVnSkDi9Uuq3z1tIPxhsF/h9EhkcTxYjn2R53LrN8vG88NXe8l+pn2z7fb6W4Z1P5Lw+KU1HDo/DoFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMD/4z/MLTInncV+4QAAAABJRU5ErkJggg=="
                    description="#Feb1Coup"
                />
            </Link>
        </section>
    );
};

export default Month;
