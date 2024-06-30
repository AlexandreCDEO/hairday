import dayjs from "dayjs";
import "dayjs/locale/pt-br"

const utc = require("dayjs/plugin/utc");

dayjs.locale("pt-br")
dayjs.extend(utc)

