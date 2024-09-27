import { ApiProperty } from "@nestjs/swagger";
import { DatetimeRange } from "./DatetimeRange";
import { AccountType, AccountTypeRefPath } from "./AccountType";
import { ReportBookBalanceOption } from "./ReportBookBalanceOption";
import { TimeGranularity } from "./TimeGranularity";

export class ReportBookGranularityBalanceOption extends ReportBookBalanceOption{

    @ApiProperty({ description: "time granularity", required: false })
    granularity?: TimeGranularity

    static Example: ReportBookGranularityBalanceOption = {
        ...ReportBookBalanceOption.Example,
        granularity: TimeGranularity.MONTHLY
    }
}