import { FetchTracesAction, FetchTraceItemAction } from "./traces";
import { updateTraceFiltersAction, updateInputTagAction } from "./traceFilters";
import {
	getServicesListAction,
	getServiceMetricsAction,
	externalErrCodeMetricsActions,
	externalMetricsAvgDurationAction,
	getExternalMetricsAction,
	getTopEndpointsAction,
	getFilteredTraceMetricsAction,
	getDbOverViewMetricsAction,
} from "./metrics";
import { serviceMapItemAction, servicesAction } from "./serviceMap";
import { getUsageDataAction } from "./usage";
import { updateTimeIntervalAction } from "./global";

export enum ActionTypes {
	updateTraceFilters = "UPDATE_TRACES_FILTER",
	updateInput = "UPDATE_INPUT",
	fetchTraces = "FETCH_TRACES",
	fetchTraceItem = "FETCH_TRACE_ITEM",
	getServicesList = "GET_SERVICE_LIST",
	getServiceMetrics = "GET_SERVICE_METRICS",
	getAvgDurationMetrics = "GET_AVG_DURATION_METRICS",
	getErrCodeMetrics = "GET_ERR_CODE_METRICS",
	getDbOverviewMetrics = "GET_DB_OVERVIEW_METRICS",
	getExternalMetrics = "GET_EXTERNAL_METRICS",
	getTopEndpoints = "GET_TOP_ENDPOINTS",
	getUsageData = "GET_USAGE_DATE",
	updateTimeInterval = "UPDATE_TIME_INTERVAL",
	getFilteredTraceMetrics = "GET_FILTERED_TRACE_METRICS",
	getServiceMapItems = "GET_SERVICE_MAP_ITEMS",
	getServices = "GET_SERVICES",
}

export type Action =
	| FetchTraceItemAction
	| FetchTracesAction
	| updateTraceFiltersAction
	| updateInputTagAction
	| getServicesListAction
	| getServiceMetricsAction
	| getTopEndpointsAction
	| getUsageDataAction
	| updateTimeIntervalAction
	| getFilteredTraceMetricsAction
	| getExternalMetricsAction
	| externalErrCodeMetricsActions
	| getDbOverViewMetricsAction
	| servicesAction
	| serviceMapItemAction
	| externalMetricsAvgDurationAction;
