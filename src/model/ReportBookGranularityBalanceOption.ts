import { ApiProperty } from "@nestjs/swagger";
import { FirstDayOfYear } from "./FirstDayOfYear";
import { FirstDayOfMonth } from "./FirstDayOfMonth";
import { ReportBookBalanceOption } from "./ReportBookBalanceOption";
import { TimeGranularity } from "./TimeGranularity";

export class ReportBookGranularityBalanceOption extends ReportBookBalanceOption{

    @ApiProperty({ description: "time granularity", required: false })
    granularity?: TimeGranularity

    @ApiProperty({ description: "first day of month", required: false })
    firstDayOfMonth?: FirstDayOfMonth
    /**
     * firstDayOfYear type is a tuple of two numbers: [month, date]
     */
    @ApiProperty({ description: "first day of year (as [month, date])", type: [Number], required: false })
    firstDayOfYear?: [number, number]

    static Example: ReportBookGranularityBalanceOption = {
        ...ReportBookBalanceOption.Example,
        granularity: TimeGranularity.MONTHLY,
        firstDayOfMonth: 1,
        firstDayOfYear: [0, 1]
    }
}