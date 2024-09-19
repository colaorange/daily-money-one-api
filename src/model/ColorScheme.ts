import { ApiProperty } from "@nestjs/swagger"


export class ElevationColors {
    @ApiProperty({ description: '' })
    level0: string
    @ApiProperty({ description: '' })
    level1: string
    @ApiProperty({ description: '' })
    level2: string
    @ApiProperty({ description: '' })
    level3: string
    @ApiProperty({ description: '' })
    level4: string
    @ApiProperty({ description: '' })
    level5: string
};

export class ColorScheme {
    @ApiProperty({ description: '' })
    dark: boolean

    @ApiProperty({ description: '' })
    warn: string
    @ApiProperty({ description: '' })
    warnContainer: string
    @ApiProperty({ description: '' })
    onWarn: string
    @ApiProperty({ description: '' })
    onWarnContainer: string

    @ApiProperty({ description: '' })
    info: string
    @ApiProperty({ description: '' })
    infoContainer: string
    @ApiProperty({ description: '' })
    onInfo: string
    @ApiProperty({ description: '' })
    onInfoContainer: string

    @ApiProperty({ description: '' })
    income: string
    @ApiProperty({ description: '' })
    incomeContainer: string
    @ApiProperty({ description: '' })
    onIncome: string
    @ApiProperty({ description: '' })
    onIncomeContainer: string
    @ApiProperty({ description: '' })
    inverseIncome: string

    @ApiProperty({ description: '' })
    asset: string
    @ApiProperty({ description: '' })
    assetContainer: string
    @ApiProperty({ description: '' })
    onAsset: string
    @ApiProperty({ description: '' })
    onAssetContainer: string
    @ApiProperty({ description: '' })
    inverseAsset: string

    @ApiProperty({ description: '' })
    expense: string
    @ApiProperty({ description: '' })
    expenseContainer: string
    @ApiProperty({ description: '' })
    onExpense: string
    @ApiProperty({ description: '' })
    onExpenseContainer: string
    @ApiProperty({ description: '' })
    inverseExpense: string

    @ApiProperty({ description: '' })
    liability: string
    @ApiProperty({ description: '' })
    liabilityContainer: string
    @ApiProperty({ description: '' })
    onLiability: string
    @ApiProperty({ description: '' })
    onLiabilityContainer: string
    @ApiProperty({ description: '' })
    inverseLiability: string

    @ApiProperty({ description: '' })
    other: string
    @ApiProperty({ description: '' })
    otherContainer: string
    @ApiProperty({ description: '' })
    onOther: string
    @ApiProperty({ description: '' })
    onOtherContainer: string
    @ApiProperty({ description: '' })
    inverseOther: string

    @ApiProperty({ description: '' })
    primary: string;
    @ApiProperty({ description: '' })
    primaryContainer: string;
    @ApiProperty({ description: '' })
    secondary: string;
    @ApiProperty({ description: '' })
    secondaryContainer: string;
    @ApiProperty({ description: '' })
    tertiary: string;
    @ApiProperty({ description: '' })
    tertiaryContainer: string;
    @ApiProperty({ description: '' })
    surface: string;
    @ApiProperty({ description: '' })
    surfaceVariant: string;
    @ApiProperty({ description: '' })
    surfaceDisabled: string;
    @ApiProperty({ description: '' })
    background: string;
    @ApiProperty({ description: '' })
    error: string;
    @ApiProperty({ description: '' })
    errorContainer: string;
    @ApiProperty({ description: '' })
    onPrimary: string;
    @ApiProperty({ description: '' })
    onPrimaryContainer: string;
    @ApiProperty({ description: '' })
    onSecondary: string;
    @ApiProperty({ description: '' })
    onSecondaryContainer: string;
    @ApiProperty({ description: '' })
    onTertiary: string;
    @ApiProperty({ description: '' })
    onTertiaryContainer: string;
    @ApiProperty({ description: '' })
    onSurface: string;
    @ApiProperty({ description: '' })
    onSurfaceVariant: string;
    @ApiProperty({ description: '' })
    onSurfaceDisabled: string;
    @ApiProperty({ description: '' })
    onError: string;
    @ApiProperty({ description: '' })
    onErrorContainer: string;
    @ApiProperty({ description: '' })
    onBackground: string;
    @ApiProperty({ description: '' })
    outline: string;
    @ApiProperty({ description: '' })
    outlineVariant: string;
    @ApiProperty({ description: '' })
    inverseSurface: string;
    @ApiProperty({ description: '' })
    inverseOnSurface: string;
    @ApiProperty({ description: '' })
    inversePrimary: string;
    @ApiProperty({ description: '' })
    shadow: string;
    @ApiProperty({ description: '' })
    scrim: string;
    @ApiProperty({ description: '' })
    backdrop: string;
    @ApiProperty({ description: '' })
    elevation: ElevationColors;
}

