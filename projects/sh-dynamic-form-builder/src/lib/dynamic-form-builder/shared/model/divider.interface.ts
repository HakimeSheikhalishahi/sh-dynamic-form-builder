export interface IDivider {
    /**doesn't show divider */
    suppress?: boolean;
    lineClass?: string;
    /**The height of divider */
    height?: number;
    /** Set style for ordinal number between divider line, you can add one or more class name split by space. for example:'class1 class2 class3' */
    ordinalNumberClass?: string;
    /**doesn't show an ordinal number in the center of the divider line */
    suppressOrdinalNumber?: boolean;
}
